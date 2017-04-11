import React from 'react'
import styled from 'styled-components'

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const StyledInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  font-size: 22px;
  font-weight: bold;
`

class FreeField extends React.Component{

  constructor(props){
    super(props)
    let storeKey = props.storeKey || props.label.split('.').reduce( (agr, next) => agr += capitalizeFirstLetter(next) )
    this.state = { 
      value: props.store[storeKey].value, 
      storeKey: storeKey 
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event){
    let newValue = event.target.value
    this.setState({value: newValue})
    store[this.state.storeKey].value = newValue
  }

  render(){
    return(
      <div style={{fontSize: '18px', display: 'table'}}>

          <div className="col-1-3" style={{display: 'table-cell', verticalAlign: 'middle', float: 'none'}}>
            <span style={{fontWeight: 'bold'}}>
              {this.props.children}:
            </span>
          </div>

          <div className="col-2-3">
            <StyledInput 
              type="text" 
              value={ this.state.value }
              onChange={e => this.handleInput(e) }
              />
          </div>

      </div>
    );
  }
}

export default FreeField