import ConfigBuffer from './ConfigBuffer'

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

    if(store.includeCss){
      buffer.addCsLine('}')
      buffer.addLine('{')
      buffer.dTab(1)
      buffer.addCsLine('test: /\.css?$/')
      buffer.addLine('use: [{0}style-loader{0}, {0}css-loader{0}]')
      buffer.dTab(-1)
    }
    
    buffer.addLine('}')

    buffer.closeArray()
    buffer.closeObjectNoComma()
  }

  if(store.includeCss){
  }

  buffer.add("}")
  return buffer.toString().format(store.quote)
}

export default generateConfig