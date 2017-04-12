import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react'
import CheckBoxInSelectableDiv from './CheckBoxInSelectableDiv'

const CheckBoxForStoreKey = ({store, storeKey, children}) => {
  let prrops = {
    checked: store[storeKey],
    selected: false,
    handleCheck: e => {},
    handleSelect: e => {store.toggle(storeKey)}
  }
  return (
    <CheckBoxInSelectableDiv {...prrops}>
      {children}
    </CheckBoxInSelectableDiv>)
}

export default observer(CheckBoxForStoreKey)