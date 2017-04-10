import React from 'react'
import PaddedDiv from '../Components/PaddedDiv'

const changeEntry = (entry, value) => {
  entry = value;
}

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

class FreeField extends React.Component{

  constructor(props){
    super(props)
    let thisKey = props.storeKey || props.name.split('.').reduce( (agr, next) => agr += capitalizeFirstLetter(next) )
    this.state = { value: props.store[thisKey], key: thisKey }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event){
    let newValue = event.target.value
    this.setState({value: newValue})
    store[this.state.key] = newValue
  }

  render(){
    return(
      <tr>
        <td>
          {this.props.name}:
        </td>
        <td>
          <input 
            type="text" 
            value={ this.state.value }
            onChange={e => this.handleInput(e) }/>
        </td>
      </tr>
    );
  }
}

const ConfigForm = ({store}) => (
  <PaddedDiv>

    <table>
      <tbody>

        <FreeField store={store} name={'entry'} />

        <FreeField store={store} name={'output.path'} />

        <FreeField store={store} name={'output.filename'} />

      </tbody>
    </table>

  </PaddedDiv>
)

export default ConfigForm