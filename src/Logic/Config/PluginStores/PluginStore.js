import { observable } from 'mobx'

class PluginStore{
  label
  @observable active = false
  @observable selected = false

  url
  tooltipText
  packageName

  constructor(label, writeToBuffer){
    this.label = label
    this.active
    this.writeToBuffer = writeToBuffer // (store, buffer) => void
  }

  toggleActive(){
    this.active = !this.active
  }

  select(){
    this.selected = true
  }

  unSelect(){
    this.selected = false
  }
}

export default PluginStore