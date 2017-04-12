import LoaderStore from './LoaderStore'

const writeFileLoader = (store, buffer) => {
  buffer.addLine('loader: {0}file-loader?name=public/fonts/[name].[ext]{0}')
}

// label, active, test, writeToBuffer
const FileStore = new LoaderStore('File', '/\\.(eot|svg|ttf|woff|woff2)$/', writeFileLoader)
FileStore.url = 'https://github.com/webpack-contrib/file-loader'
FileStore.tooltipText = 'Loads files - what a shocking surprise!'
export default FileStore