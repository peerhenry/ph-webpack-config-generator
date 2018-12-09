import { observable } from 'mobx'

class LoaderStore{
  label
  @observable test
  @observable active = false
  @observable selected = false

  url
  tooltipText
  packageName

  constructor(label, test, writeToBuffer){
    this.label = label
    this.name = name
    this.active
    this.test = test
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

  getTest(){
    return this.test
  }
}

export default LoaderStore