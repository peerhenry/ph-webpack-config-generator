class ComponentContainer{

  componentMap = {}

  register(label, component){
    this.componentMap[label] = component
  }

  resolve(label){
    return this.componentMap[label]
  }
}

export default ComponentContainer