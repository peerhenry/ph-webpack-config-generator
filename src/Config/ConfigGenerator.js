import ConfigBuffer from './ConfigBuffer'

// attach format function to string
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

const insertLoaders = (store, buffer) => {

  buffer.nextLine()
  buffer.openObject("module")
  buffer.openArray("rules")

  let activeLoaders = store.loaders.filter(l => l.active)
  activeLoaders.forEach((loader, index) => {
    buffer.openAnonymousObject()
    buffer.addCsLine('test: ' + loader.test)
    loader.writeToBuffer(store, buffer)
    let withComma = index !== (activeLoaders.length - 1)
    buffer.closeObject(withComma)
  })

  buffer.closeArray()
  let withComma = store.usesExtractTextPlugin()
  buffer.closeObject(withComma)
}

const generateConfig = window.generateConfig = (store) => {
  let buffer = new ConfigBuffer(store, "var webpack = require({0}webpack{0});\n")

  if(store.usesExtractTextPlugin()) buffer.addLine('var ExtractTextPlugin = require({0}extract-text-webpack-plugin{0});')
  buffer.addLine('\nmodule.exports = {\n')

  buffer.dTab(1)
  buffer.addKvp('context')
  buffer.addKvpS('entry')
  buffer.nextLine()

  buffer.openObject("output")
  buffer.addKvpS('outputPath')
  buffer.addKvpS('outputFilename')
  let withComma = store.usesLoaders()
  buffer.closeObject(withComma)

  if( store.usesLoaders() ) insertLoaders(store, buffer)

  if( store.usesExtractTextPlugin() ){
    buffer.nextLine()
    buffer.openArray('plugins')
    buffer.addLine('new ExtractTextPlugin({0}public/styleBundle.css{0})')
    buffer.closeArray()
  }

  buffer.add("}")
  return buffer.toString().format(store.quote)
}

export default generateConfig