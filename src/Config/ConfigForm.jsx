import React from 'react'
import PaddedDiv from '../Components/PaddedDiv'

const changeEntry = (entry, value) => {
  entry = value;
}

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

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
      <tr>
        <td>
          {this.props.label}:
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
      <div>
        <input type="checkbox" checked={this.state.value} onChange={this.handleChange}/>
        {this.props.label}
        <br/>
      </div>
    )
  }
}

const ConfigForm = ({store}) => (
  <PaddedDiv>

    <div className="grid">

      <div className="col-1-3">
        <h3>Free fields</h3>
        <table>
          <tbody>

            <FreeField store={store} label={'entry'} storeKey={'entry'}/>

            <FreeField store={store} label={'output.path'} storeKey={'outputPath'}/>

            <FreeField store={store} label={'output.filename'} storeKey={'outputFilename'}/>

          </tbody>
        </table>
      </div>

      <div className="col-1-3">
        <h3>Loaders</h3>
        <ul>
          <CheckBox store={store} storeKey={'includeBabel'} label={'Babel'}/>
          <CheckBox store={store} storeKey={'includeCss'} label={'Css'}/>
          <CheckBox store={store} storeKey={'includeTypeScript'} label={'Typescript'}/>
        </ul>
      </div>

      <div className="col-1-3">
        <h3>column 3</h3>
      </div>
    </div>

  </PaddedDiv>
)

export default ConfigForm