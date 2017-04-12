import React from 'react'
import styled from 'styled-components'
import BabelOptionCheckbox from './BabelOptionCheckbox'

const BabelOptions = ({store}) => (
  <div>
    <h4>Presets</h4>
    {
      store.babelPresets.map((option, index)=>(
        <BabelOptionCheckbox key={index} store={store} babelOption={option}/>
      ))
    }
    <h4>Plugins</h4>
    <ul>
      {
        store.babelPlugins.map((option, index)=>(
          <BabelOptionCheckbox key={index} store={store} babelOption={option}/>
        ))
      }
    </ul>
  </div>
)

export default BabelOptions