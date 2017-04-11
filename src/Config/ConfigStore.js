import { autorun, observable } from 'mobx'

class Kvp{
  @observable value

  constructor(key, value){
    this.key = key
    this.value = value
  }
}

class ConfigStore{
  // === 1. webpack config appearance
  @observable tab = "  "
  @observable quote = "'"

  // === 2. general settings
  context = new Kvp('context', '__dirname')
  entry = new Kvp('entry', './src/main')

  outputPath = new Kvp('path', 'public')
  outputFilename = new Kvp('filename', 'bundle.js')

  // === 3. loaders
  @observable includeBabel = true
  @observable includeCss = false
  @observable includeFileLoader = false
  usesLoaders = () => (this.includeBabel || this.includeCss || this.includeFileLoader)

  @observable selectedLoader = 'includeBabel'
  selectLoader(loader){
    this.selectedLoader = loader
  }

  // ====== 3.1.1 babel plugins
  @observable useBabelDecoratorsLegacy = false;
  usesPlugins = () => (this.useBabelDecoratorsLegacy)

  // ====== 3.1.2 babel presets
  @observable useBabelEs2015 = true
  @observable useBabelStage0 = true
  @observable useBabelReact = true
  usesPresets = () => (this.useBabelEs2015 || this.useBabelStage0 || this.useBabelReact)

  babelHasOptions = () => ( this.usesPresets() || this.usesPlugins() )

  // ====== 3.2 css options

  @observable usePostCss = false
  @observable useExtractTextPlugin = false

  // === 4. Setter methods
  toggle(name){
    this[name] = !this[name]
  }

  noLoaders = () => {
    this.includeBabel = false
    this.includeCss = false
    this.includeFileLoader = false
  }

  everythingFalse = () => {
    this.noLoaders()
    // babel
    this.useBabelDecoratorsLegacy = false
    this.useBabelEs2015 = false
    this.useBabelStage0 = false
    this.useBabelReact = false
    // css
    this.usePostCss = false
    this.useExtractTextPlugin = false
  }

  setSimpleEs2015 = () => {
    this.everythingFalse()
    this.includeBabel = true
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