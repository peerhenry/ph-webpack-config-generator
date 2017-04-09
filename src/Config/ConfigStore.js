import { autorun, observable } from 'mobx'

class ConfigStore{
  @observable context = "__dirname"
  @observable entry = "./src/main"
}

var store = window.store = new ConfigStore() // setting window.store is purely for debugging

export default store

autorun(() => {
  console.log('config: ' + JSON.stringify(store.config))
})