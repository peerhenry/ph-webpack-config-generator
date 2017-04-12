import React from 'react'
import CheckBoxForStoreKey from '../../../Components/CheckBoxForStoreKey'
import ToolTipLabel from '../../../Components/ToolTipLabel'

const TypeScriptOptions = ({store}) => (
  <div>
    <CheckBoxForStoreKey store={store} storeKey={'useCheckerPlugin'}>CheckerPlugin</CheckBoxForStoreKey>
  </div>
)

export default TypeScriptOptions