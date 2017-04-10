import React from 'react'
import PaddedDiv from './Components/PaddedDiv'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  margin: 0
`

const Header = ({}) => (
  <header>
    <PaddedDiv>
      <StyledH1>PH Webpack Config Generator</StyledH1>
      <p>When you just want a webpack config file without too much hassle!</p>
    </PaddedDiv>
  </header>
)

export default Header