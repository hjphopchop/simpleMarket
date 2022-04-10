
import './styles/App.css'

import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'


const App = () => {

  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
