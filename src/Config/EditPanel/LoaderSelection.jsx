import React from 'react'
import CheckBox from '../../Components/CheckBox'

const LoaderSelection = ({store}) => (
  <ul>
    <CheckBox store={store} storeKey={'includeBabel'} label={'Babel'}/>
    <CheckBox store={store} storeKey={'includeCss'} label={'Css'}/>
    <CheckBox store={store} storeKey={'includeFileLoader'} label={'File'}/>
  </ul>
)

export default LoaderSelection