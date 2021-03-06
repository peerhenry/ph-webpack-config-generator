import React from 'react'
import styled from 'styled-components'

// border-bottom: 1px dotted black;
const ToolTip = styled.div`
  position: relative;
  display: inline-block;

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
  z-index: 1;
`

const ToolTipLabel = ({label, tooltip}) => (
  <ToolTip>{label}
    <ToolTipContent>
      {tooltip}
    </ToolTipContent>
  </ToolTip>
)

export default ToolTipLabel