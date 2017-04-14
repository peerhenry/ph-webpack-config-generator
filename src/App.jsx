import React from 'react'
import { Provider } from 'mobx-react'
import styled from 'styled-components'

require('./styles/all')
import store from './Config/ConfigStore'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const App = ({}) => (
  <div id="wrapper">
    <Header/>
    <Provider store={store}><Content/></Provider>
    <Footer/>
  </div> 
)

export default App