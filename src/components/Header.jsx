import React from 'react'
import logo from "../assets/img/logo.jpg"

const Header = () => {
  return (
    <nav>
        <ul>
            <li><img src={logo} /></li>
            <li>Рейтинг магазинов</li>
            <li>Магазины</li>
            <li>Новости компании</li>
            <li> Войти</li>
        </ul>
    </nav>
  )
}

export default Header