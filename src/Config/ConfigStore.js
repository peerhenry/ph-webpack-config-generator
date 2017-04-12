import { autorun, observable } from 'mobx'
import BabelStore from './LoaderStores/BabelStore'
import CssStore from './LoaderStores/CssStore'
import FileStore from './LoaderStores/FileStore'

class Kvp{
  @observable value

  constructor(key, value){
    this.key = key
    this.value = value
  }
}

class ConfigStore{
  constructor(){
    BabelStore.select()
  }

  // === 1. Appearance
  @observable tab = "  "
  @observable quote = "'"
  @observable showLinks = false

  // === 2. General webpack.config settings
  context = new Kvp('context', '__dirname')
  entry = new Kvp('entry', './src/main')

  outputPath = new Kvp('path', 'public')
  outputFilename = new Kvp('filename', 'bundle.js')

  // === 3. loaders
  loaders = [BabelStore, CssStore, FileStore]

  usesLoaders = () => (this.loaders.find(l => l.active))
  getSelectedLoader = () => (this.loaders.find(l => l.selected))

  // ====== 3.1.1 babel plugins
  @observable useBabelDecoratorsLegacy = false;
  @observable useBabelReactHtmlAttrs = false;

  usesPlugins = () => (this.useBabelDecoratorsLegacy || this.useBabelReactHtmlAttrs)

  // ====== 3.1.2 babel presets
  @observable useBabelEs2015 = true
  @observable useBabelStage0 = true
  @observable useBabelReact = true
  usesPresets = () => (this.useBabelEs2015 || this.useBabelStage0 || this.useBabelReact)

  babelHasOptions = () => ( this.usesPresets() || this.usesPlugins() )

  // ====== 3.2 css options

  @observable usePostCss = false
  @observable useExtractTextPlugin = true

  usesExtractTextPlugin = () => {
    return CssStore.active && this.useExtractTextPlugin
  }

  // === 4. Setter methods
  toggle(name){
    this[name] = !this[name]
  }

  noLoaders = () => {
    this.loaders.forEach(l => l.active = false)
  }

  everythingFalse = () => {
    this.noLoaders()
    // babel
    this.useBabelDecoratorsLegacy = false
    this.useBabelReactHtmlAttrs = false
    this.useBabelEs2015 = false
    this.useBabelStage0 = false
    this.useBabelReact = false
    // css
    this.usePostCss = false
    this.useExtractTextPlugin = false
  }

  setSimpleEs2015 = () => {
    this.everythingFalse()
    BabelStore.active = true
    this.useBabelEs2015 = true
  }

  setSimpleReact = () => {
    this.setSimpleEs2015()
    this.useBabelStage0 = true
    this.useBabelReact = true
  }
}

var store = window.store = new ConfigStore() // setting window.store is purely for debugging

export default store

/*autorun(() => {
  console.log('store: ' + JSON.stringify(store))
})//*/