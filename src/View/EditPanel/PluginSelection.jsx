import React from 'react'
import LoaderSelectionItem from './LoaderSelectionItem'
import ToolTipLabel from 'Components/ToolTipLabel'

const LoaderSelection = ({store}) => (
  <div>
    {
      store.plugins.map((plugin, index) => (
        <LoaderSelectionItem key={index} store={store} loaderStore={plugin}>
          {
            store.showLinks ? 
            <a href={plugin.url}>{plugin.label}</a>
            :
            <ToolTipLabel 
              label={plugin.label} 
              tooltip={plugin.tooltipText}/>
          }
          
        </LoaderSelectionItem>
      ))
    }
  </div>
)

export default LoaderSelection