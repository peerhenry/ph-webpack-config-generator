import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import EditPanel from './EditPanel/EditPanel'
import ConfigResult from './ConfigResult'

const ConfigEditPanel = inject("store")(EditPanel)
const Result = inject("store")(observer(ConfigResult))

const Content = ({}) => (
  <section className='grid' id="main" style={{maxWidth: 'none', height: '100%'}}>

    <article className="col-7-12 mobile-col-1-1" style={{display: 'table', height: '100%'}}>
      <div className="content" style={{height: '100%'}}>
        <ConfigEditPanel/>
      </div>
    </article>

    <article className="col-5-12 mobile-col-1-1" style={{display: 'table', height: '100%', paddingRight: '0'}}>
      <div className="content" style={{display: 'table', height: '100%', width: '100%'}}>
        <Result/>
      </div>
    </article>

  </section>
)

export default Content