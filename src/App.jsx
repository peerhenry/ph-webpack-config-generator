import React from 'react'
import { Provider } from 'mobx-react'
import styled from 'styled-components'

require('./styles/all')
import store from './Config/ConfigStore'
import Header from './Header'
import ConfigPage from './Config/ConfigPage'
import Footer from './Footer'

const App = ({}) => (
  <div id="wrapper">
    <Header/>
    <Provider store={store}><ConfigPage/></Provider>
    <Footer/>
  </div> 
)

export default App