
import './styles/App.css'

import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import RatingMarkets from './pages/RatingMarkets'
import CompanyNews from './pages/CompanyNews'
import Markets from './pages/Markets'
import Auth from './pages/Auth'


const App = () => {

  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/ratingMarkets' element={<RatingMarkets/>}></Route>
        <Route path='/news' element={<CompanyNews/>} ></Route>
        <Route path='/markets' element={<Markets/>}></Route>
        <Route path='/auth' element={<Auth/>} ></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
