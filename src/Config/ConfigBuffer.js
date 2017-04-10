class ConfigBuffer{
  text = ""
  tabNr = 0
  offset = ""

  constructor(store, text){
    this.text = text
    this.store = store
  }

  calculateOffset(){
    this.offset = ""
    let counter = this.tabNr
    while(counter > 0){
      this.offset += this.store.tab
      counter--
    }
  }

  dTab(number){
    this.tabNr += number
    this.calculateOffset()
  }

  addLine(text){
    this.text += this.offset + text + "\n"
  }

  addCsLine(text){
    this.text += this.offset + text + ",\n"
  }

  emptyLine(){
    this.text += "\n"
  }

  add(text){
    this.text += text
  }

  openObject(name){
    this.addLine(name + ": {")
    this.dTab(1)
  }

  closeObject(){
    this.dTab(-1)
    this.addCsLine("}")
  }

  closeObjectNoComma(){
    this.dTab(-1)
    this.addLine("}")
  }

  openArray(name){
    this.addLine(name + ": [")
    this.dTab(1)
  }

  closeArray(){
    this.dTab(-1)
    this.addLine("]")
  }

  addKvp(storeKey){
    let key = store[storeKey].key.split('.').pop()
    this.addCsLine(key + ": " + store[storeKey].value)
  }

  addKvpS(storeKey){
    let key = store[storeKey].key.split('.').pop()
    this.addCsLine(key + ": {0}" + store[storeKey].value + "{0}")
  }

  toString(){
    return this.text
  }
}

export default ConfigBuffer