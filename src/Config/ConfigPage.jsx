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

const StyledArticle = styled.article`
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  display: table;
`

const ConfigPage = ({}) => (
  <StyledSection id="main" style={{maxWidth: "none"}}>

    <StyledArticle>
      <Form/>
    </StyledArticle>

    <StyledArticle>
      <Result/>
    </StyledArticle>

  </StyledSection>
)

export default ConfigPage