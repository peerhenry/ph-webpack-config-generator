import React from 'react'
import styled from 'styled-components'

const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  &:hover{
    color: white;
  }

  &:hover span{
    visibility: visible;
  }
`

const ToolTipContent = styled.span`
  visibility: hidden;
  width: 300px;
  background-color: #365363;
  color: #fff;
  text-align: center;
  border: 1px solid black;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-in
`

const ToolTipLabel = ({label, children}) => (
  <ToolTip>{label}
    <ToolTipContent>
      {children}
    </ToolTipContent>
  </ToolTip>
)

export default ToolTipLabel