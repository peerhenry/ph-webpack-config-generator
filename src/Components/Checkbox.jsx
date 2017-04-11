import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react'

const DivMargin = styled.div`
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

@observer
class CheckBox extends React.Component{

  constructor(props){
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
  }

  getVal(){
    return this.props.store[this.props.storeKey]
  }

  handleCheck(e){
    //this.props.store.toggle(this.props.storeKey)
  }

  handleSelect(e){
    this.props.store.toggle(this.props.storeKey)
  }

  render(){
    const checked = this.getVal()
    return (
      <DivMargin className="clickable" onClick={e => this.handleSelect(e)}>
        <input 
          type="checkbox" 
          checked={checked}
          style={{marginRight: '10px', marginLeft: '5px'}} 
          onChange={this.handleCheck}/>
        <span>{ this.props.label }</span>
        <br/>
      </DivMargin>
    )
  }
}

export default CheckBox