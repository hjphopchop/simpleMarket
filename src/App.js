
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
        <Route path='/simpleMarket/' element={<Home/>} ></Route>
        <Route path='/simpleMarket/cart' element={<Cart/>}></Route>
        <Route path='/simpleMarket/ratingMarkets' element={<RatingMarkets/>}></Route>
        <Route path='/simpleMarket/news' element={<CompanyNews/>} ></Route>
        <Route path='/simpleMarket/markets' element={<Markets/>}></Route>
        <Route path='/simpleMarket/auth' element={<Auth/>} ></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
