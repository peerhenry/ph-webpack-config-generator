import React from 'react'
import styled from 'styled-components'

const ExpandedDiv = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

export default ExpandedDiv