import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: papayawhip;
`

const Header = ({}) => (
  <StyledHeader>
    <h1>Hello says PH-Webpack-Config-Generator!</h1>
    <p>A website for conveniently generating webpack configurations.</p>
  </StyledHeader>
)

export default Header