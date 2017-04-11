import React from 'react'
import styled from 'styled-components'

import PaddedDiv from '../../Components/PaddedDiv'
import FreeFieldTableRow from '../../Components/FreeFieldTableRow'
import CheckBox from '../../Components/CheckBox'
import MiniPanel from '../../Components/MiniPanel'

import EntryOutputFields from './EntryOutputFields'
import PresetSelection from './PresetSelection'

const StyledH3 = styled.h3`
  margin-bottom: 5px;
  color: #d0dce1;
`

const ThirdColumn = ({label, children}) => ( //style={{height: '50%', border: '1px solid black'}}
  <div className="col-1-3" >
    <StyledH3>{label}</StyledH3>
    { children }
  </div>
)

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

      <div className="col-1-3">
        <MiniPanel>

          <StyledH3>{'Free Fields'}</StyledH3>
          <table style={{width: '100%'}}>
            <tbody>
              <FreeFieldTableRow store={store} storeKey={'entry'}>{'entry'}</FreeFieldTableRow>
              <FreeFieldTableRow store={store} storeKey={'outputFilename'}>{'output'}</FreeFieldTableRow>

              <FreeFieldTableRow store={store} storeKey={'outputPath'}>
                {/*<CheckBox store={store} storeKey={'useOutputPath'} label={'output path'}/>*/}
                {'output path'}
              </FreeFieldTableRow>
              
            </tbody>
          </table>
          
        </MiniPanel>
      </div>

      <div className="col-1-3"><MiniPanel>

        <StyledH3>{'Loaders'}</StyledH3>
        <ul>
          <CheckBox store={store} storeKey={'includeBabel'} label={'Babel'}/>
          <CheckBox store={store} storeKey={'includeCss'} label={'Css'}/>
          <CheckBox store={store} storeKey={'includeFileLoader'} label={'File'}/>
        </ul>

      </MiniPanel></div>

      <div className="col-1-3"><MiniPanel>
      
        <StyledH3>{'Loader options'}</StyledH3>
        <h4>Presets</h4>
        <ul>
          <CheckBox store={store} storeKey={'useBabelEs2015'} label={'ES2015'}/>
          <CheckBox store={store} storeKey={'useBabelStage0'} label={'Stage-0'}/>
          <CheckBox store={store} storeKey={'useBabelReact'} label={'React'}/>
        </ul>
        <h4>Plugins</h4>
        <ul>
          <CheckBox store={store} storeKey={'useBabelDecoratorsLegacy'} label={'Legacy decorators'}/>
        </ul>

      </MiniPanel></div>

    </div>

  </div>
)

export default EditPanel