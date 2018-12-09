import React from 'react'
import styled from 'styled-components'
import FreeField from 'Components/FreeField'
import ExpandedDiv from 'Components/ExpandedDiv'

const EntryOutputFields = ({store}) => (
  <ExpandedDiv>
    <div className="col-1-2">
      <FreeField store={store} storeKey={'entry'}>{'entry'}</FreeField>
    </div>
    <div className="col-1-2">
      <FreeField store={store} storeKey={'outputFilename'}>{'output'}</FreeField>
    </div>
  </ExpandedDiv>
)

export default EntryOutputFields