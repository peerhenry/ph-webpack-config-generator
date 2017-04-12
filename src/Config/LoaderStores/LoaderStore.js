import { observable } from 'mobx'

class LoaderStore{
  @observable label
  @observable active
  @observable test
  @observable selected = false

  @observable url
  @observable tooltipText
  packageName

  constructor(label, active, test, writeToBuffer){
    this.label = label
    this.name = name
    this.active = active
    this.test = test
    this.writeToBuffer = writeToBuffer // (soter, buffer) => void
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

export default LoaderStore