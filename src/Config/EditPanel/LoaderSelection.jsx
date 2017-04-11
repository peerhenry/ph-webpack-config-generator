import React from 'react'
import LoaderSelector from '../../Components/LoaderSelector'

const LoaderSelection = ({store}) => (
  <ul>
    <LoaderSelector store={store} storeKey={'includeBabel'}>
      <a href="https://babeljs.io/">Babel</a>
    </LoaderSelector>
    <LoaderSelector store={store} storeKey={'includeCss'}>
      <a href="https://github.com/webpack-contrib/css-loader">Css</a>
    </LoaderSelector>
    <LoaderSelector store={store} storeKey={'includeFileLoader'}>File</LoaderSelector>
  </ul>
)

export default LoaderSelection