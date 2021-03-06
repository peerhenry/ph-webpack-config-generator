import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react'
import CheckBoxInSelectableDiv from './CheckBoxInSelectableDiv'

const CheckBoxForStoreKey = ({store, storeKey, children}) => {
  let props = {
    checked: store[storeKey],
    selected: false,
    handleCheck: e => {store.toggle(storeKey)},
    handleSelect: e => {}
  }
  return (
    <CheckBoxInSelectableDiv {...props}>
      {children}
    </CheckBoxInSelectableDiv>)
}

export default observer(CheckBoxForStoreKey)