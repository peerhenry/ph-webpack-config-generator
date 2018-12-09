import React from 'react'
import {observer} from 'mobx-react'
import CheckBoxInSelectableDiv from 'Components/CheckBoxInSelectableDiv'
import ToolTipLabel from 'Components/ToolTipLabel'

const WithLink = ({babelOption}) => {
  let props = {
    label: <a href={babelOption.url}>{babelOption.label}</a>,
    tooltip: babelOption.tooltipText
  }
  return <ToolTipLabel {...props}/>
}

const WithoutLink = ({babelOption}) => {
  let props = {
    label: babelOption.label,
    tooltip: babelOption.tooltipText
  }
  return <ToolTipLabel {...props}/>
}

const BabelOptionCheckbox = ({store, babelOption}) => {

  const props = {
    checked: babelOption.active,
    selected: false,
    handleSelect: e => {},
    handleCheck: e => {
      babelOption.toggleActive()
    }
  }

  return (
  <CheckBoxInSelectableDiv {...props}>
    {
      store.showLinks ? <WithLink babelOption={babelOption}/>
      : <WithoutLink babelOption={babelOption}/>
    }
  </CheckBoxInSelectableDiv>)
}

export default observer(BabelOptionCheckbox)