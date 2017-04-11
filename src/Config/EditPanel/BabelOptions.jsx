import React from 'react'
import CheckBox from '../../Components/CheckBox'

const BabelOptions = ({}) => (
  <div>
    <h4>Presets</h4>
    <ul>
      <CheckBox store={store} storeKey={'useBabelEs2015'} label={'ES2015'}/>
      <CheckBox store={store} storeKey={'useBabelStage0'} label={'Stage-0'}/>
      <CheckBox store={store} storeKey={'useBabelReact'} label={'React'}/>
    </ul>
    <h4>Plugins</h4>
    <ul>
      <CheckBox store={store} storeKey={'useBabelDecoratorsLegacy'} label={'Legacy decorators'}/>
    </ul>
  </div>
)

export default BabelOptions