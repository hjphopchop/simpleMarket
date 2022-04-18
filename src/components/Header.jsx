import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo.jpg"
import cl from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <nav>
        <ul className={cl.nav}>
            <li><Link to={'/simpleMarket'}><img src={logo} /></Link> </li>
            <li><Link to={'simpleMarket/ratingMarkets'}>Рейтинг магазинов</Link></li>
            <li><Link to={'simpleMarket/markets'}>Магазины</Link></li>
            <li><Link to={'simpleMarket/news'}>Новости компании</Link></li>
            <li><Link to={'simpleMarket/auth'}> Войти</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Header