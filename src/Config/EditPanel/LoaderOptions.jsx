import React from 'react'
import {observer} from 'mobx-react'
import BabelOptions from './LoaderOptions/BabelOptions'
import CssOptions from './LoaderOptions/CssOptions'
import TypeScriptOptions from './LoaderOptions/TypeScriptOptions'
import FileLoaderOptions from './LoaderOptions/FileLoaderOptions'

const LoaderOptions = ({store}) => {
  switch(store.getSelectedLoader().label){
    case 'Babel':
      return <BabelOptions store={store}/>
    case 'Css':
      return <CssOptions store={store}/>
    case 'File':
      return <FileLoaderOptions store={store}/>
    case 'TypeScript':
      return <TypeScriptOptions store={store}/>
    default:
      return false
  }
}

export default observer(LoaderOptions)