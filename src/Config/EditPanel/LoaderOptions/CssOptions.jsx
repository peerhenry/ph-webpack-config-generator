import React from 'react'
import CheckBox from '../../../Components/CheckBox'

const CssOptions = ({store}) => (
  <div>
    <ul>
      <CheckBox store={store} storeKey={'usePostCss'} label={'PostCss'}/>
    </ul>
  </div>
)

export default CssOptions