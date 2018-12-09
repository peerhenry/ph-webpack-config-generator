import React from 'react'
import CheckBoxForStoreKey from 'Components/CheckBoxForStoreKey'

const FileLoaderOptions = ({store}) => (
  <div>
    <CheckBoxForStoreKey store={store} storeKey={'loadFonts'}>Font files</CheckBoxForStoreKey>
    <CheckBoxForStoreKey store={store} storeKey={'loadImages'}>Image files</CheckBoxForStoreKey>
    <CheckBoxForStoreKey store={store} storeKey={'loadText'}>Text files</CheckBoxForStoreKey>
    <CheckBoxForStoreKey store={store} storeKey={'loadHtml'}>Html files</CheckBoxForStoreKey>
  </div>
)

export default FileLoaderOptions