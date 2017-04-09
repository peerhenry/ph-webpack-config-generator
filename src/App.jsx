import React from 'react'
import { Provider } from 'mobx-react'

import store from './Config/ConfigStore'
import Header from './Header'
import ConfigPage from './Config/ConfigPage'
import Footer from './Footer'

const App = ({}) => (
  <div>
    <Header/>
    <Provider store={store}><ConfigPage/></Provider>
    <Footer/>
  </div>
)

export default App