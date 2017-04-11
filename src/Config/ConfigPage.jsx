import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import EditPanel from './EditPanel/EditPanel'
import ConfigResult from './ConfigResult'

const ConfigEditPanel = inject("store")(observer(EditPanel))
const Result = inject("store")(observer(ConfigResult))

const ConfigPage = ({}) => (
  <section className='grid' id="main" style={{maxWidth: 'none', height: '100%'}}>

    <article className="col-7-12" style={{display: 'table-cell', height: '100%'}}>
      <div className="content" style={{height: '100%'}}>
        <ConfigEditPanel/>
      </div>
    </article>

    <article className="col-5-12" style={{display: 'table', height: '100%'}}>
      <div className="content" style={{display: 'table', height: '100%', width: '100%'}}>
        <Result/>
      </div>
    </article>

  </section>
)

export default ConfigPage