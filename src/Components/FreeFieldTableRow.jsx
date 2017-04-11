import React from 'react'

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

class FreeFieldTableRow extends React.Component{

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
      <tr>
        <td>
          {this.props.children}:
        </td>
        <td>
          <input 
            type="text" 
            value={ this.state.value }
            onChange={e => this.handleInput(e) }
            style={{width: '100%'}}
            />
        </td>
      </tr>
    );
  }
}

export default FreeFieldTableRow