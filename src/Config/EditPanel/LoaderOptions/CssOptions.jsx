import React from 'react'
import CheckBoxForStoreKey from '../../../Components/CheckBoxForStoreKey'
import ToolTipLabel from '../../../Components/ToolTipLabel'
import ThreeDots from '../../../Components/ThreeDots'

// <ThreeDots/>
const CssOptions = ({store}) => (
  <div>
    <ul>
      <CheckBoxForStoreKey store={store} storeKey={'usePostCss'}>PostCss</CheckBoxForStoreKey>
      <CheckBoxForStoreKey store={store} storeKey={'useExtractTextPlugin'}>
        <ToolTipLabel 
          label={'ExtractTextPlugin'} 
          tooltip={'This plugin transpiles all styling into a separate bundle as a .css file.'}/>
      </CheckBoxForStoreKey>
    </ul>
  </div>
)

export default CssOptions