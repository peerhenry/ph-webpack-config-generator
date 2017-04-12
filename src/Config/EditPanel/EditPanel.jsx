import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react'

import PaddedDiv from '../../Components/PaddedDiv'
import MiniPanel from '../../Components/MiniPanel'
import MiniPanelHeader from '../../Components/MiniPanelHeader'

import EntryOutputFields from './EntryOutputFields'
import PresetSelection from './PresetSelection'
import LoaderSelection from './LoaderSelection'
import LoaderOptions from './LoaderOptions'

const EditPanel = ({store}) => (
  <div style={{margin: '0', height: '100%'}}>

    <div className="grid grid-pad" style={{overflow: 'visible'}}>
      <div className="col-1-1">
        <MiniPanel>
          <EntryOutputFields store={store}/>
        </MiniPanel>
      </div>
    </div>

    <div className="grid grid-pad" style={{maxWidth: 'none', overflow: 'visible', marginBottom: '20px'}}>

      <div className="col-1-3"><MiniPanel>
        <MiniPanelHeader><h2>Presets</h2></MiniPanelHeader>
        <PresetSelection store={store}/>
      </MiniPanel></div>

      <div className="col-1-3"><MiniPanel>
        <MiniPanelHeader><h2>Loaders</h2></MiniPanelHeader>
        <LoaderSelection store={store}/>
      </MiniPanel></div>

      <div className="col-1-3"><MiniPanel>
        <MiniPanelHeader><h2>Loader options</h2></MiniPanelHeader>
        <LoaderOptions store={store}/>
      </MiniPanel></div>

    </div>

    <div className="grid grid-pad" style={{overflow: 'visible', visibility: 'hidden'}}>
      <div className="col-1-1">
        <MiniPanel>
          <h2>Required packages</h2>
          <ul>
            <li>webpack</li>
            <li>babel-core</li>
            <li>babel-loader</li>
            <li>babel-plugin-transform-decorators-legacy</li>
            <li>babel-plugin-react-html-attrs</li>
            <li>babel-preset-es2015</li>
            <li>babel-preset-stage-0</li>
            <li>babel-preset-react</li>

            <li>css-loader</li>
            <li>style-loader</li>
            <li>postcss</li>

            <li>file-loader</li>
          </ul>
        </MiniPanel>
      </div>
    </div>

  </div>
)

export default EditPanel