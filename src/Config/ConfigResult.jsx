import React from 'react'
import styled from 'styled-components'
import PaddedDiv from '../Components/PaddedDiv'

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

const StyledDiv = styled.div`
  background-color: white;
  color: black;
  height: 100%;
  width: 100%;
`

const ConfigResult = ({store}) => (
  <StyledDiv><PaddedDiv>    
    
    <pre><code>
      {
        buildConfig(store).map(line => line+"\n")
      }
    </code></pre>
    
  </PaddedDiv></StyledDiv>
)

export default ConfigResult