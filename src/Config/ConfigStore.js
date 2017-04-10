import { autorun, observable } from 'mobx'

class Kvp{
  @observable value

  constructor(key, value){
    this.key = key
    this.value = value
  }
}

class ConfigStore{
  context = new Kvp('context', '__dirname')
  entry = new Kvp('entry', './src/main')

  outputPath = new Kvp('path', 'public')
  outputFilename = new Kvp('filename', 'bundle.js')

  @observable tab = "  "
  @observable quote = "'"

  @observable includeBabel = true;
  @observable includeCss = false;
  @observable includeTypeScript = false;
}

var store = window.store = new ConfigStore() // setting window.store is purely for debugging

export default store

/*autorun(() => {
  console.log('store: ' + JSON.stringify(store))
})//*/