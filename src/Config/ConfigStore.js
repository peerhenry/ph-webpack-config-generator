import { autorun, observable } from 'mobx'
import BabelStore from './LoaderStores/BabelStore'
import CssStore from './LoaderStores/CssStore'
import FileLoader from './LoaderStores/FileLoader'
import TypeScriptLoader from './LoaderStores/TypeScriptLoader'

class Kvp{
  @observable value

  constructor(key, value){
    this.key = key
    this.value = value
  }
}

class BabelOption{
  label
  webpackValue
  url
  @observable active = false
  tooltipText

  constructor(label, webpackValue, url, tooltipText){
    this.label = label
    this.webpackValue = webpackValue
    this.url = url
    this.tooltipText = tooltipText
  }

  toggleActive(){
    this.active = !this.active
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
  loaders = [BabelStore, CssStore, FileLoader, TypeScriptLoader]

  usesLoaders = () => (this.loaders.find(l => l.active))
  getSelectedLoader = () => (this.loaders.find(l => l.selected))

  // ====== 3.1 babel options

  babelPresets = [
    new BabelOption(
      'ES2015', // label
      'es2015', // webpack.config value  
      'https://babeljs.io/docs/plugins/preset-es2015/', // url
      'Use this preset to have access to modern ES2015 features for javascript.' // tooltip
    ),
    new BabelOption(
      'Stage-0', // label
      'stage-0', // webpack.config value
      'https://babeljs.io/docs/plugins/preset-stage-0/', // url
      'Use this if you absolutely must have access to bleeding edge javascript features. Beware: may contain features that will not end up in ECMAScript.' // tooltip
    ),
    new BabelOption(
      'React',  // label
      'react',  // webpack.config value
      '',       // url
      'Turns JSX syntax into React components'  // tooltip
      )
    // tooltip: Use the <a href="https://babeljs.io/docs/plugins/preset-react/">Babel React preset</a> to turn JSX syntax into <a href="https://facebook.github.io/react/">React</a> components.
  ]

  babelPlugins = [
    new BabelOption(
      'Legacy decorators',            // label
      'transform-decorators-legacy',  // webpack.config value
      'https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy',
      'A plugin for Babel 6 that replicates the old decorator behavior from Babel 5.' // tooltip
    ),
    new BabelOption(
      'React html attributes',  // label
      'react-html-attrs',       // webpack.config value
      'https://github.com/insin/babel-plugin-react-html-attrs',
      'Transforms JSX class attributes into classname and for into htmlFor.'  // tooltip
    )
  ]

  anyActiveBabelPresets = () => (this.babelPresets.find(o => o.active))
  anyActiveBabelPlugins = () => (this.babelPlugins.find(o => o.active))
  anyActiveBabelOptions = () => (this.anyActiveBabelPresets() || this.anyActiveBabelPlugins())

  // ====== 3.2 css options

  @observable usePostCss = false
  @observable useExtractTextPlugin = true

  usesExtractTextPlugin(){
    return CssStore.active && this.useExtractTextPlugin
  }

  // ====== 3.3 File loader options

  @observable loadFonts = true
  @observable loadImages = false
  @observable loadText = false
  @observable loadHtml = false

  // ====== 3.4 TypeScript options

  @observable useCheckerPlugin = false

  usesCheckerPlugin(){
    return TypeScriptLoader.active && this.useCheckerPlugin
  }

  // === 4. Other class methods

  anyPlugins(){
    return this.usesExtractTextPlugin() || this.usesCheckerPlugin()
  }

  toggle(name){
    this[name] = !this[name]
  }

  everythingFalse = () => {
    this.loaders.forEach(l => l.active = false)
    // babel
    this.babelPresets.concat(this.babelPlugins).forEach(l => l.active = false)
    // css
    this.usePostCss = false
    this.useExtractTextPlugin = false
  }

  enableBabelPreset(name){
    this.babelPresets.find(p => p.label === name).active = true
  }

  setSimpleEs2015 = () => {
    this.everythingFalse()
    BabelStore.active = true
    this.enableBabelPreset('ES2015')
  }

  setSimpleReact = () => {
    this.setSimpleEs2015()
    this.enableBabelPreset('Stage-0')
    this.enableBabelPreset('React')
  }
}

var store = /*window.store = */new ConfigStore() // setting window.store is purely for debugging

export default store