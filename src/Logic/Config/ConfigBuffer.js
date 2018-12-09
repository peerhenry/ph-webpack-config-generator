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

  incrTab(){
    this.dTab(1)
  }

  decrTab(){
    this.dTab(-1)
  }

  add(text){
    this.text += text
  }

  addWithOffset(text){
    this.text += this.offset + text
  }

  addLine(text){
    this.text += this.offset + text + "\n"
  }

  writeLine(text){
    this.addLine(text)
  }

  addCsLine(text){
    this.text += this.offset + text + ",\n"
  }

  nextLine(){
    this.text += "\n"
  }

  newLine(){
    this.nextLine()
  }

  openObject(name){
    this.addLine(name + ": {")
    this.dTab(1)
  }

  openAnonymousObject(name){
    this.addLine("{")
    this.dTab(1)
  }

  closeObject(withComma){
    this.dTab(-1)
    this.addWithOffset("}")
    if( withComma ) this.add(",")
    this.add("\n")
  }

  openArray(name){
    this.addLine(name + ": [")
    this.dTab(1)
  }

  closeArray(){
    this.dTab(-1)
    this.addLine("]")
  }

  addKvp(store, storeKey){
    let key = store[storeKey].key.split('.').pop()
    this.addCsLine(key + ": " + store[storeKey].value)
  }

  addKvpS(store, storeKey){
    let key = store[storeKey].key.split('.').pop()
    this.addCsLine(key + ": {0}" + store[storeKey].value + "{0}")
  }

  toString(){
    return this.text
  }
}

export default ConfigBuffer