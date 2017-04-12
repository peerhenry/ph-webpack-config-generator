import LoaderStore from './LoaderStore'

const insertOptions = (buffer, options, label) => {
  let wpval = options.filter(p => p.active).map(p => '{0}' + p.webpackValue + '{0}, ')
  let line = (wpval.reduce((agr, next) => agr += next)).slice(0, -2)
  buffer.addWithOffset(label + ': [' + line + ']')
}

const insertBabelPresets = (store, buffer) => {
  insertOptions(buffer, store.babelPresets, 'presets')
  if(store.anyActiveBabelPlugins()) buffer.add(',')
  buffer.nextLine()
}

const insertBabelPlugins = (store, buffer) => {
  insertOptions(buffer, store.babelPlugins, 'plugins')
}

const writeBabel = (store, buffer) => {
  buffer.addLine('exclude: /node_modules/')
  buffer.openObject('use')
  buffer.addCsLine('loader: {0}babel-loader{0}')

  if(store.anyActiveBabelOptions()){
    buffer.openObject('options')
    if(store.anyActiveBabelPresets()) insertBabelPresets(store, buffer)
    if(store.anyActiveBabelPlugins()) insertBabelPlugins(store, buffer)
    buffer.closeObject()
  }
}

const BabelStore = new LoaderStore('Babel', '/\\.jsx?$/', writeBabel)
BabelStore.url = 'https://babeljs.io/'
BabelStore.tooltipText = 'Babel is a compiler that transforms modern javascript to browser compatible javascript.'
export default BabelStore