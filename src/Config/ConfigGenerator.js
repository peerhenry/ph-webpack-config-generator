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

const insertBabelPresets = (store, buffer) => {
  let presets = []
  if(store.useBabelEs2015) presets.push('{0}es2015{0}, ')   // they all get ", " appended
  if(store.useBabelStage0) presets.push('{0}stage-0{0}, ')  // because the need to be csv'd
  if(store.useBabelReact) presets.push('{0}react{0}, ')     // also the last one because of the slice
  let line = (presets.reduce((agr, next) => agr += next)).slice(0, -2)
  buffer.addWithOffset('presets: [' + line + ']')
  if(store.usesPlugins()) buffer.add(',')
  buffer.nextLine()
}

const insertBabelPlugins = (store, buffer) => {
  let plugins = []
  if(store.useBabelDecoratorsLegacy) plugins.push('{0}transform-decorators-legacy{0}, ')
  let line = (plugins.reduce((agr, next) => agr += next)).slice(0, -2)
  buffer.addLine('plugins: [' + line + ']')
}

const insertLoaders = (store, buffer) => {

  buffer.nextLine()
  buffer.openObject("module")
  buffer.openArray("rules")

  if(store.includeBabel){
    buffer.openAnonymousObject()

      buffer.addCsLine('test: /\.jsx?$/')
      buffer.addLine('exclude: /node_modules/')
      buffer.openObject('use')
      buffer.addCsLine('loader: {0}babel-loader{0}')

      if(store.babelHasOptions()){
        buffer.openObject('options')
        if(store.usesPresets()) insertBabelPresets(store, buffer)
        if(store.usesPlugins()) insertBabelPlugins(store, buffer)
        buffer.closeObject()
      }

      buffer.closeObject()

    let withComma = store.includeCss || store.includeFileLoader
    buffer.closeObject(withComma)
  }

  if(store.includeCss){
    buffer.openAnonymousObject()
      buffer.addCsLine('test: /\.css?$/')
      buffer.addLine('use: [{0}style-loader{0}, {0}css-loader{0}]')
    let withComma = store.includeFileLoader
    buffer.closeObject(withComma)
  }

  if(store.includeFileLoader){
    buffer.openAnonymousObject()
    buffer.addLine('test: /\.(eot|svg|ttf|woff|woff2)$/,')
    buffer.addLine('loader: {0}file-loader?name=public/fonts/[name].[ext]{0}')
    buffer.closeObject()
  }

  buffer.closeArray()
  buffer.closeObjectNoComma()
}

const generateConfig = window.generateConfig = (store) => {
  let buffer = new ConfigBuffer(store, "var webpack = require({0}webpack{0});\n\nmodule.exports = {\n")
  buffer.dTab(1)
  buffer.addKvp('context')
  buffer.addKvpS('entry')
  buffer.nextLine()

  buffer.openObject("output")
  buffer.addKvpS('outputPath')
  buffer.addKvpS('outputFilename')
  buffer.closeObject()

  if(store.usesLoaders()) insertLoaders(store, buffer)

  buffer.add("}")
  return buffer.toString().format(store.quote)
}

export default generateConfig