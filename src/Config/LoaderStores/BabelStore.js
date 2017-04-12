import LoaderStore from './LoaderStore'

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
  if(store.useBabelReactHtmlAttrs) plugins.push('{0}react-html-attrs{0}, ')
  let line = (plugins.reduce((agr, next) => agr += next)).slice(0, -2)
  buffer.addLine('plugins: [' + line + ']')
}

const writeBabel = (store, buffer) => {
  buffer.addLine('exclude: /node_modules/')
  buffer.openObject('use')
  buffer.addCsLine('loader: {0}babel-loader{0}')

  if(store.babelHasOptions()){
    buffer.openObject('options')
    if(store.usesPresets()) insertBabelPresets(store, buffer)
    if(store.usesPlugins()) insertBabelPlugins(store, buffer)
    buffer.closeObject()
  }
}

const BabelStore = new LoaderStore('Babel', '/\\.jsx?$/', writeBabel)
BabelStore.url = 'https://babeljs.io/'
BabelStore.tooltipText = 'Babel is a compiler that transforms modern javascript to browser compatible javascript.'
export default BabelStore