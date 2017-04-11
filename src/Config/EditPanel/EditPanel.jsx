import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react'

import PaddedDiv from '../../Components/PaddedDiv'
import FreeFieldTableRow from '../../Components/FreeFieldTableRow'
import CheckBox from '../../Components/CheckBox'
import MiniPanel from '../../Components/MiniPanel'
import MiniPanelHeader from '../../Components/MiniPanelHeader'

import EntryOutputFields from './EntryOutputFields'
import PresetSelection from './PresetSelection'
import LoaderSelection from './LoaderSelection'

import BabelOptions from './LoaderOptions/BabelOptions'
import CssOptions from './LoaderOptions/CssOptions'

const LoaderOptionsSwitch = ({store}) => {
  switch(store.selectedLoader){
    case 'includeBabel':
      return <BabelOptions store={store}/>
    case 'includeCss':
      return <CssOptions store={store}/>
    case 'includeFileLoader':
      return <span>No options for file loader</span>
    default:
      return false
  }
}

const LoaderOptionsOberver = observer(LoaderOptionsSwitch)

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
        <LoaderOptionsOberver store={store}/>
      </MiniPanel></div>

    </div>

  </div>
)

export default EditPanel