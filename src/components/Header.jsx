import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo.jpg"
import cl from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <nav>
        <ul className={cl.nav}>
            <li><Link to={'/'}><img src={logo} /></Link> </li>
            <li>Рейтинг магазинов</li>
            <li>Магазины</li>
            <li>Новости компании</li>
            <li> Войти</li>
        </ul>
    </nav>
    <Link to={'/cart'}>Корзина</Link>
    </div>
     
    
  )
}

export default Header