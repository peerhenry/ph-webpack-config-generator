import React from 'react'
import PaddedDiv from './Components/PaddedDiv'
import styled from 'styled-components'
import WebpackSvg from './WebpackSvg'

const StyledH1 = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`

const Header = ({}) => (
  <header>
    <PaddedDiv>
      <div style={{display: 'inline-block', marginRight: '20px'}}>
        <WebpackSvg width={70} height={70}/>
      </div>
      <div style={{display: 'inline-block'}}>
        <StyledH1>PH Webpack Config Generator</StyledH1>
        <h3>When you just want a webpack config file without hassle!</h3>
      </div>
    </PaddedDiv>
  </header>
)

export default Header