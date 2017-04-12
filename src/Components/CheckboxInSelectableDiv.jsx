import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react'

const ClickableDiv = styled.div`
  padding: 10px 0;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  border-color: #365363

  &:hover {
    background-color: #263036;
    border-color: #263036;
  }
`

class CheckBoxInSelectableDiv extends React.Component{

  constructor(props){
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck(e){
    this.props.handleCheck(e)
  }

  handleSelect(e){
    this.props.handleSelect(e)
  }

  render(){
    const checked = this.props.checked
    const selected = this.props.selected
    return (
      <ClickableDiv className="clickable" onClick={e => this.handleSelect(e)}>
        <input 
          type="checkbox" 
          checked={checked}
          style={{marginRight: '10px', marginLeft: '5px'}}
          onChange={this.handleCheck}/>
        { this.props.children }
        <br/>
      </ClickableDiv>
    )
  }
}

export default CheckBoxInSelectableDiv