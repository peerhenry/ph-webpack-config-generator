import { autorun, observable } from 'mobx'

class Kvp{
  @observable value

  constructor(key, value){
    this.key = key
    this.value = value
  }
}

class ConfigStore{
  // webpack config appearance
  @observable tab = "  "
  @observable quote = "'"

  // general settings
  context = new Kvp('context', '__dirname')
  entry = new Kvp('entry', './src/main')

  outputPath = new Kvp('path', 'public')
  outputFilename = new Kvp('filename', 'bundle.js')

  // loaders
  @observable includeBabel = true
  @observable includeCss = false
  @observable includeFileLoader = false
  usesLoaders = () => (this.includeBabel || this.includeCss || this.includeFileLoader)

  // babel plugins
  @observable useBabelDecoratorsLegacy = false;
  usesPlugins = () => (this.useBabelDecoratorsLegacy)

  // babel presets
  @observable useBabelEs2015 = true
  @observable useBabelStage0 = true
  @observable useBabelReact = true
  usesPresets = () => (this.useBabelEs2015 || this.useBabelStage0 || this.useBabelReact)

  babelHasOptions = () => ( this.usesPresets() || this.usesPlugins() )

  // Setter methods
  noLoaders = () => {
    this.includeBabel = false
    this.includeCss = false
    this.includeFileLoader = false
  }

  everythingFalse = () => {
    this.noLoaders()
    this.useBabelDecoratorsLegacy = false
    this.useBabelEs2015 = false
    this.useBabelStage0 = false
    this.useBabelReact = false
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