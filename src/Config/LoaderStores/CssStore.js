import LoaderStore from './LoaderStore'

const writeCssLoader = (store, buffer) => {
  if(store.usesExtractTextPlugin()){
    buffer.addLine('use: ExtractTextPlugin.extract({')
    buffer.incrTab()
    buffer.addWithOffset('loader: {0}css-loader')
    if(store.usePostCss) buffer.add('?importLoaders=1!postcss-loader')
    buffer.add('{0}\n')
    buffer.decrTab()
    buffer.addLine('})')
  }
  else{
    let loaders = ['style-loader', 'css-loader']
    if(store.usePostCss) loaders.push('postcss-loader')
    let cssLine = loaders.map(i => '{0}'+i+'{0}, ').reduce((agr, next) => agr += next).slice(0, -2)
    buffer.addLine('use: [' + cssLine + ']')
  }
}

// label, active, test, writeToBuffer
export default new LoaderStore('Css', false, '/\\.css?$/', writeCssLoader)