import React from 'react'
import { inject, observer } from 'mobx-react'

import ConfigForm from './ConfigForm'
import ConfigResult from './ConfigResult'

const Form = inject("store")(observer(ConfigForm))
const Result = inject("store")(observer(ConfigResult))

const ConfigPage = ({}) => (
  <section>
    <Form/>
    <hr/>
    <Result/>
  </section>
)

export default ConfigPage