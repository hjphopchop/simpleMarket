import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import cl from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className={cl.nav}>
          <li>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>{" "}
          </li>
          <li>
            <Link to={"/ratingMarkets"}>Рейтинг магазинов</Link>
          </li>
          <li>
            <Link to={"/markets"}>Магазины</Link>
          </li>
          <li>
            <Link to={"/news"}>Новости компании</Link>
          </li>
          <li>
            <Link to={"/auth"}> Войти</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
