import LoaderStore from './LoaderStore'

const writeFileLoader = (store, buffer) => {
  buffer.addLine('loader: {0}file-loader{0}') // ?name=public/fonts/[name].[ext]
}

// label, test, writeToBuffer
const FileStore = new LoaderStore('File', '/\\.(eot|svg|ttf|woff|woff2)$/', writeFileLoader)
FileStore.url = 'https://github.com/webpack-contrib/file-loader'
FileStore.tooltipText = 'Loads files - what a shocking surprise!'
FileStore.getTest = store => {
  let result = '/\\.('
  let extensions = []
  if(store.loadFonts) extensions = extensions.concat(['eot', 'svg', 'ttf', 'woff', 'woff2'])
  if(store.loadImages) extensions = extensions.concat(['jpg', 'jpeg', 'png', 'gif'])
  if(store.loadText) extensions.push('txt')
  if(store.loadHtml) extensions.push('html')
  result += extensions.map(e => e+'|').reduce((agr, next) => agr += next).slice(0, -1)
  result += ')$/'
  return result
}

export default FileStore