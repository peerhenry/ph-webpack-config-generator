import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import ConfigForm from './ConfigForm'
import ConfigResult from './ConfigResult'

const Form = inject("store")(observer(ConfigForm))
const Result = inject("store")(observer(ConfigResult))

const StyledSection = styled.section`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`

const ConfigPage = ({}) => (
  <StyledSection id="main" style={{maxWidth: "none"}}>

    <article className="col-2-3">
      <div className="content">
        <Form/>
      </div>
    </article>

    <article className="col-1-3" style={{display: 'table', height: '100%'}}>
      <div className="content" style={{display: 'table', height: '100%', width: '100%'}}>
        <Result/>
      </div>
    </article>

  </StyledSection>
)

export default ConfigPage