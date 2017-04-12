import React from 'react'
import LoaderSelectionItem from './LoaderSelectionItem'

{/*
    <LoaderSelector store={store} storeKey={'includeBabel'}>
      <a href="https://babeljs.io/">Babel</a>
    </LoaderSelector>
    <LoaderSelector store={store} storeKey={'includeCss'}>
      <a href="https://github.com/webpack-contrib/css-loader">Css</a>
    </LoaderSelector>
    <LoaderSelector store={store} storeKey={'includeFileLoader'}>File</LoaderSelector>
*/}

const LoaderSelection = ({store}) => (
  <ul>
    {
      store.loaders.map((loader, index) => (
        <LoaderSelectionItem key={index} store={store} loaderStore={loader}>
          {
            store.showLinks ? 
            <a href={loader.url}>{loader.label}</a>
            :
            <span>{loader.label}</span>
          }
          
        </LoaderSelectionItem>
      ))
    }
  </ul>
)

export default LoaderSelection