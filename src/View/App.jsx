import React from 'react'
import { Provider } from 'mobx-react'
import styled from 'styled-components'

require('./styles/all')
import Header from './Header'
import Content from './Content'
//import Footer from './Footer'
import container from '../Logic/ComponentRegistration'
const Footer = container.resolve('Footer');

const App = ({store}) => (
  <div id="wrapper">
    <Header/>
    <Provider store={store}><Content/></Provider>
    <Footer/>
  </div> 
)

export default App