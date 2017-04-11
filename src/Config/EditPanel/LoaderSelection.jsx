import React from 'react'
import LoaderSelector from '../../Components/LoaderSelector'

const LoaderSelection = ({store}) => (
  <ul>
    <LoaderSelector store={store} storeKey={'includeBabel'} label={'Babel'}/>
    <LoaderSelector store={store} storeKey={'includeCss'} label={'Css'}/>
    <LoaderSelector store={store} storeKey={'includeFileLoader'} label={'File'}/>
  </ul>
)

export default LoaderSelection