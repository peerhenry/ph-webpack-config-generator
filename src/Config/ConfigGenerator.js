
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

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
    console.log('storeKey: ' + storeKey)
    let key = store[storeKey].key.split('.').pop()
    this.addCsLine(key + ": {0}" + store[storeKey].value + "{0}")
  }

  toString(){
    return this.text
  }
}

generateConfig = window.generateConfig = (store) => {
  let buffer = new ConfigBuffer(store, "var webpack = require({0}webpack{0});\n\nmodule.exports = {\n")
  buffer.dTab(1)
  buffer.addKvp('context')
  buffer.addKvpS('entry')
  buffer.emptyLine()

  buffer.openObject("output")
  buffer.addKvpS('outputPath')
  buffer.addKvpS('outputFilename')
  buffer.closeObject()

  if(store.includeBabel){
    buffer.emptyLine()
    buffer.openObject("module")
    buffer.openArray("rules")

    buffer.addLine('{')
    buffer.dTab(1)
    buffer.addCsLine('test: /\.jsx?$/')
    buffer.addLine('exclude: /node_modules/')
    buffer.openObject('use')
    buffer.addCsLine('loader: {0}babel-loader{0}')
    buffer.openObject('options')
    buffer.closeObjectNoComma()
    buffer.closeObjectNoComma()
    buffer.dTab(-1)
    buffer.addLine('}')

    buffer.closeArray()
    buffer.closeObjectNoComma()
  }

  buffer.add("}")
  return buffer.toString().format(store.quote)
}

export default generateConfig