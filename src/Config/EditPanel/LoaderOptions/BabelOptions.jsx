import React from 'react'
import styled from 'styled-components'
import CheckBox from '../../../Components/CheckBox'
import ToolTipLabel from '../../../Components/ToolTipLabel'

// <a href="https://babeljs.io/docs/plugins/preset-react/">
const BabelOptions = ({}) => (
  <div>
    <h4>Presets</h4>
    <ul>

      <CheckBox store={store} storeKey={'useBabelEs2015'} label={'ES2015'}>
        <a href="https://babeljs.io/docs/plugins/preset-es2015/">
          <ToolTipLabel label={'ES2015'}>
            Use this preset to have access to modern ES2015 features for javascript.
          </ToolTipLabel>
        </a>
      </CheckBox>

      <CheckBox store={store} storeKey={'useBabelStage0'}>
        <a href="https://babeljs.io/docs/plugins/preset-stage-0/">
          <ToolTipLabel label={'Stage-0'}>
            Use this if you absolutely must have access to bleeding edge javascript features. Beware: may contain features that will not end up in ECMAScript.
          </ToolTipLabel>
        </a>
      </CheckBox>

      <CheckBox store={store} storeKey={'useBabelReact'}>
        <span>
          <ToolTipLabel label={'React'}>
            Use the <a href="https://babeljs.io/docs/plugins/preset-react/">Babel React preset</a> to turn JSX syntax into <a href="https://facebook.github.io/react/">React</a> components.
          </ToolTipLabel>
        </span>
      </CheckBox>

    </ul>
    <h4>Plugins</h4>
    <ul>

      <CheckBox store={store} storeKey={'useBabelDecoratorsLegacy'}>
        <a href="https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy">
          <ToolTipLabel label={'Legacy decorators'}>
            A plugin for Babel 6 that replicates the old decorator behavior from Babel 5.
          </ToolTipLabel>
        </a>
      </CheckBox>
      
    </ul>
  </div>
)

export default BabelOptions