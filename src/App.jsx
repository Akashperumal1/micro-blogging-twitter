import React from 'react'
import Signin from './component/Signin'
import  './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './component/blog'
import Message from './component/Message'
import Notification from './component/Notification'
import Profile from './component/Profile'
function App() {

  return (
    <BrowserRouter>
   
    <div style={{
      display:"flex",
      flexDirection:'row',
      border:'1px solid black'
    }}  >
       <Routes>
    <Route path='/'  element={< Signin/>} />
    <Route  path='/' element={< Blog/>} />
    </Routes>
       <div className='appMain'>

  <Routes>
    
  //   <Route path='/message' element={< Message/>} />
  //   <Route  path='/notification' element={< Notification/>} />
  //   <Route  path='/profile' element={< Profile/>} />
  // </Routes></div></div>
  // </BrowserRouter>
  )
}

export default App
