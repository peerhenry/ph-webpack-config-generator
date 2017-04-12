import React from 'react'
import LoaderSelectionItem from './LoaderSelectionItem'

const LoaderSelection = ({store}) => (
  <div>
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
  </div>
)

export default LoaderSelection