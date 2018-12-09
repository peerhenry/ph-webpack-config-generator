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
    buffer.addCsLine('test: ' + loader.getTest(store))
    loader.writeToBuffer(store, buffer)
    let withComma = index !== (activeLoaders.length - 1)
    buffer.closeObject(withComma)
  })

  buffer.closeArray()
  let withComma = store.anyPlugins()
  buffer.closeObject(withComma)
}

// this stuff needs to be refactored so it can be properly tested:
// - the method is way too big
// - tightly coupled to ConfigBuffer
const generateConfig = (store) => {
  let buffer = new ConfigBuffer(store, "var webpack = require({0}webpack{0});\n")

  const extractText = store.usesExtractTextPlugin()
  const checker = store.usesCheckerPlugin()

  if(extractText) buffer.addLine('var ExtractTextPlugin = require({0}extract-text-webpack-plugin{0});')
  if(checker) buffer.addLine('const { CheckerPlugin } = require({0}awesome-typescript-loader{0});')
  buffer.addLine('\nmodule.exports = {\n')

  buffer.dTab(1)
  buffer.addKvp(store, 'context')
  buffer.addKvpS(store, 'entry')
  buffer.nextLine()

  buffer.openObject("output")
  buffer.addKvpS(store, 'outputPath')
  buffer.addKvpS(store, 'outputFilename')
  let withComma = store.usesLoaders()
  buffer.closeObject(withComma)

  if( store.usesLoaders() ) insertLoaders(store, buffer)

  if(store.anyPlugins()){
    buffer.nextLine()
    buffer.openArray('plugins')
    if(extractText){
      buffer.addWithOffset('new ExtractTextPlugin({0}public/styleBundle.css{0})')
      if(checker) buffer.add(',\n')
    }
    if(checker) buffer.addWithOffset('new CheckerPlugin()')
    buffer.nextLine()
    buffer.closeArray()
  }
  buffer.add("}")
  return buffer.toString().format(store.quote)
}

export default generateConfig