import React from 'react'
import styled from 'styled-components'

const DivMargin = styled.div`
  padding: 4px;

  &:hover {
    background-color: #263036;
  }
`

class CheckBox extends React.Component{

  constructor(props){
    super(props)
    this.state = { 
      value: props.store[props.storeKey]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  getVal(){
    return this.props.store[this.props.storeKey]
  }

  handleChange(e){
    let newValue = !this.getVal()
    this.setState({value: newValue})
    this.props.store[this.props.storeKey] = newValue
  }

  render(){
    return (
      <DivMargin>
        <input type="checkbox" checked={this.state.value} onChange={this.handleChange}/>
        { this.props.label }
        <br/>
      </DivMargin>
    )
  }
}

export default CheckBox