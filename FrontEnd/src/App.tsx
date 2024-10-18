import React from 'react'
import Nav from './components/Nav'
import Video from './components/Video'
import Display from './components/Display'
import './App.css'
import { Provider } from 'react-redux'
import {store} from './store/store'

import {  Outlet, } from 'react-router-dom'
import Footer from './components/Footer'

const App:React.FC = () => {

  return (
    <div>
 <Provider store={store}>
 
      <Nav/>
      <Video/>
  
      <Outlet/>
     
     
      
      <Display/>
     
     <Footer/>
      </Provider>
     
     


 
     
    </div>
  )
}

export default App
