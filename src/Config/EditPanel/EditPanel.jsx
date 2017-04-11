import React from 'react'
import styled from 'styled-components'

import PaddedDiv from '../../Components/PaddedDiv'
import FreeFieldTableRow from '../../Components/FreeFieldTableRow'
import CheckBox from '../../Components/CheckBox'
import MiniPanel from '../../Components/MiniPanel'
import MiniPanelHeader from '../../Components/MiniPanelHeader'

import EntryOutputFields from './EntryOutputFields'
import PresetSelection from './PresetSelection'
import LoaderSelection from './LoaderSelection'
import BabelOptions from './BabelOptions'

const EditPanel = ({store}) => (
  <div style={{margin: '0', height: '100%'}}>

    <div className="grid grid-pad" style={{overflow: 'visible'}}>
      <div className="col-1-1">
        <MiniPanel>
          <EntryOutputFields store={store}/>
        </MiniPanel>
      </div>
    </div>

    <div className="grid grid-pad" style={{maxWidth: 'none', overflow: 'visible'}}>

      <div className="col-1-3"><MiniPanel>
        <MiniPanelHeader><h3>Presets</h3></MiniPanelHeader>
        <PresetSelection store={store}/>
      </MiniPanel></div>

      <div className="col-1-3"><MiniPanel>
        <MiniPanelHeader><h3>Loaders</h3></MiniPanelHeader>
        <LoaderSelection store={store}/>
      </MiniPanel></div>

      <div className="col-1-3"><MiniPanel>
        <MiniPanelHeader><h3>Loader options</h3></MiniPanelHeader>
        <BabelOptions store={store}/>
      </MiniPanel></div>

    </div>

  </div>
)

export default EditPanel