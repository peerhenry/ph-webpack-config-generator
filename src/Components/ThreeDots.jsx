import React from 'react'
import styled from 'styled-components'

const Dots = styled.span`
  cursor: pointer;
  float: right;

  &:hover{
    color: white
  }

  &:after{
    content: '\\2807';
    font-size: 100%;
  }
`

const ThreeDots = ({onClick}) => <Dots onClick={onClick}/>

export default ThreeDots