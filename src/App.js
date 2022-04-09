
import './styles/App.css'

import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
