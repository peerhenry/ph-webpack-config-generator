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

const Trianlge = styled.div`
  width: 0; 
  height: 0; 
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 24px solid #365363;
  position: absolute;
  top: 0;
  left: 100%;
`

const ShadowTrianlge = styled.div`
  width: 0; 
  height: 0; 
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 24px solid #1e292e;
  position: absolute;
  top: 4px;
  right: -28px;
  z-index: -1;
`

@observer
class LoaderSelector extends React.Component{

  constructor(props){
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck(e){
    this.props.loaderStore.toggleActive()
  }

  handleSelect(e){
    this.props.store.loaders.forEach(l => l.unSelect())
    this.props.loaderStore.select()
  }

  render(){
    const checked = this.props.loaderStore.active
    const selected = this.props.loaderStore.selected
    return (
      <DivMargin className={"clickable" + (selected ? ' selected' : '')} onClick={e => this.handleSelect(e)}>
        <input 
          type="checkbox" 
          checked={checked}
          style={{marginRight: '10px', marginLeft: '5px'}} 
          onChange={this.handleCheck}/>
        <span>{ this.props.children }</span>
        { selected ? ([<ShadowTrianlge key={1}/>, <Trianlge key={2}/>]) : '' }
        <br/>
      </DivMargin>
    )
  }
}

export default LoaderSelector