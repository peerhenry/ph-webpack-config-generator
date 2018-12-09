import React from 'react'
import styled from 'styled-components'

export default styled.span`
  position: relative;
  padding-left: 1.25em;

  &:before {
    content: "";
    position: absolute;
    top: 0.25em;
    left: 0;
    width: 1em;
    height: 0.125em;
    border-top: 0.375em double #000;
    border-bottom: 0.125em solid #000;
  }

  &:hover{
    color: white
  }
`