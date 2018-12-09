import LoaderStore from './LoaderStore'

const writeTypeScriptLoader = (store, buffer) => {
  buffer.addLine('loader: {0}awesome-typescript-loader{0},')
  buffer.addLine('exclude: /node_modules/')
}

// label, test, writeToBuffer
const TypeScriptLoader = new LoaderStore('TypeScript', '/\\.tsx?$/', writeTypeScriptLoader)
TypeScriptLoader.url = 'https://github.com/s-panferov/awesome-typescript-loader'
TypeScriptLoader.tooltipText = 'Transpiles TypeScript to Javascript.'
export default TypeScriptLoader