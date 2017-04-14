import React from 'react'
import LoaderSelectionItem from './LoaderSelectionItem'
import ToolTipLabel from '../../Components/ToolTipLabel'

const LoaderSelection = ({store}) => (
  <div>
    {
      store.loaders.map((loader, index) => (
        <LoaderSelectionItem key={index} store={store} loaderStore={loader}>
          {
            store.showLinks ? 
            <a href={loader.url}>{loader.label}</a>
            :
            <ToolTipLabel 
              label={loader.label} 
              tooltip={loader.tooltipText}/>
          }
          
        </LoaderSelectionItem>
      ))
    }
  </div>
)

export default LoaderSelection