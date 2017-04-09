import React from 'react'

const getOutputPath = (store) => {
  return store.outputPath ? " + '" + store.outputPath + "'" : ""
}

const buildConfig = (store) => [
  "var webpack = require('webpack');",
  "",
  "module.exports = {",
  "",
  "  context: " + store.context + ",",
  "  entry: '" + store.entry + "'",
  "",
  "  output:{",
  "    path: __dirname" + getOutputPath(store),
  "    filename: '" + store.outputFilename + "'",
  "  }",
  "}"
]

const ConfigResult = ({store}) => (
  <div>
    <pre><code>
      {
        buildConfig(store).map(line => line+"\n")
      }
    </code></pre>
  </div>
)

export default ConfigResult