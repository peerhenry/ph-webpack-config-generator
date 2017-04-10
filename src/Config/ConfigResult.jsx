import React from 'react'
import styled from 'styled-components'
import PaddedDiv from '../Components/PaddedDiv'
import generateConfig from './ConfigGenerator'

const StyledDiv = styled.div`
  background-color: white;
  color: black;
  height: 100%;
  width: 100%;
  display: table-cell
`

const ConfigResult = ({store}) => (
  <StyledDiv><PaddedDiv>    
    
    <pre><code>
      {
        generateConfig(store)
      }
    </code></pre>

  </PaddedDiv></StyledDiv>
)

export default ConfigResult