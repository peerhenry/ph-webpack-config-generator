import LoaderStore from './LoaderStore'

const writeFileLoader = (store, buffer) => {
  buffer.addLine('loader: {0}file-loader?name=public/fonts/[name].[ext]{0}')
}

// label, active, test, writeToBuffer
export default new LoaderStore('File', true, '/\\.(eot|svg|ttf|woff|woff2)$/', writeFileLoader)