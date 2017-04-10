import React from 'react'
import styled from 'styled-components'

import PaddedDiv from '../Components/PaddedDiv'
import FreeField from '../Components/FreeField'
import CheckBox from '../Components/CheckBox'

const StyledH3 = styled.h3`
  margin-bottom: 5px;
  color: #d0dce1;
`

const ThirdColumn = ({label, children}) => (
  <div className="col-1-3">
    <StyledH3>{label}</StyledH3>
    { children }
  </div>
)

const ConfigForm = ({store}) => (
  <div>

    <div className="grid grid-pad">

      <ThirdColumn label={'Free Fields'}>
        <div className="content">
          <table>
            <tbody>
              <FreeField store={store} label={'entry'} storeKey={'entry'}/>
              <FreeField store={store} label={'output.path'} storeKey={'outputPath'}/>
              <FreeField store={store} label={'output.filename'} storeKey={'outputFilename'}/>
            </tbody>
          </table>
        </div>
      </ThirdColumn>

      <ThirdColumn label={'Loaders'}>
        <div className="content">
          <ul>
            <CheckBox store={store} storeKey={'includeBabel'} label={'Babel'}/>
            <CheckBox store={store} storeKey={'includeCss'} label={'Css'}/>
            <CheckBox store={store} storeKey={'includeTypeScript'} label={'Typescript'}/>
          </ul>
        </div>
      </ThirdColumn>

      <ThirdColumn label={'Other'}>

      </ThirdColumn>
    </div>

  </div>
)

export default ConfigForm