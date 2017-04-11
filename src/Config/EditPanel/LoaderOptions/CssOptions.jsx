import React from 'react'
import CheckBox from '../../../Components/CheckBox'
import ToolTipLabel from '../../../Components/ToolTipLabel'

const CssOptions = ({store}) => (
  <div>
    <ul>
      <CheckBox store={store} storeKey={'usePostCss'}>PostCss</CheckBox>
      <CheckBox store={store} storeKey={'useExtractTextPlugin'}>
        <ToolTipLabel label={'ExtractTextPlugin'}>This plugin transpiles all styling into a separate bundle as a .css file.</ToolTipLabel>
      </CheckBox>
    </ul>
  </div>
)

export default CssOptions