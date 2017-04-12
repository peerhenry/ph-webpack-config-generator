import React from 'react'
import CheckBoxForStoreKey from '../../../Components/CheckBoxForStoreKey'
import ToolTipLabel from '../../../Components/ToolTipLabel'

const CssOptions = ({store}) => (
  <div>
    <ul>
      <CheckBoxForStoreKey store={store} storeKey={'usePostCss'}>PostCss</CheckBoxForStoreKey>
      <CheckBoxForStoreKey store={store} storeKey={'useExtractTextPlugin'}>
        <ToolTipLabel label={'ExtractTextPlugin'}>This plugin transpiles all styling into a separate bundle as a .css file.</ToolTipLabel>
      </CheckBoxForStoreKey>
    </ul>
  </div>
)

export default CssOptions