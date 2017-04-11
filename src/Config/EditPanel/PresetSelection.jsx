import React from 'react'
import styled from 'styled-components'
import ExpandedDiv from '../../Components/ExpandedDiv'

const StyledButton = styled.button`
  border: none;
  padding: 10px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
`

const Button = ({children, handleClick}) => (
  <StyledButton className="clickable" onClick={handleClick}>
    {children}
  </StyledButton>
)

const PresetSelection = ({store}) => (
  <ul>
    <li>
      <Button handleClick={e=>store.everythingFalse()}>Clear</Button>
    </li>
    <li>
      <Button handleClick={e=>store.setSimpleEs2015()}>Simple ES2015</Button>
    </li>
    <li>
      <Button handleClick={e=>store.setSimpleReact()}>Simple React</Button>
    </li>
  </ul>
)

export default PresetSelection