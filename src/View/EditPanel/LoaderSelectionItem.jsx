import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react'
import CheckBoxInSelectableDiv from 'Components/CheckBoxInSelectableDiv'

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

const LoaderSelectionItem = ({store, loaderStore, children}) => {
  const props = {
    checked: loaderStore.active,
    selected: loaderStore.selected,
    handleCheck: e => {
      loaderStore.toggleActive()
    },
    handleSelect: e => {
      store.loaders.forEach(l => l.unSelect())
      store.plugins.forEach(p => p.unSelect())
      loaderStore.select()
    }
  }
  return (
    <CheckBoxInSelectableDiv {...props}>
      <span>{ children }</span>
      { loaderStore.selected ? ([<ShadowTrianlge key={1}/>, <Trianlge key={2}/>]) : '' }
    </CheckBoxInSelectableDiv>)
}

export default observer(LoaderSelectionItem)