import React from 'react'
import styled from 'styled-components'

const Panel = styled.div`
  padding: 8px 2%;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

const MiniPanel = ({children}) => (
  <Panel className="mini-panel">
    {children}
  </Panel>
)

export default MiniPanel