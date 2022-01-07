import React from 'react';
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className="header">
        <Link to="/" style={{ textDecoration :"none"}}>
          <div className="header__logo">
            <FaStore className="header__logoImage" fontSize="large" />
            <h2 className="header__logoTitle"> Emeka Shop</h2>
          </div>
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <FaSearch className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo"> sign In</span>
          </div>
          <div className="nav__item">
            <span className="nav__itemLineOne">Your</span>
            <span className="nav__itemLineTwo">Shop</span>
          </div>

          <Link to="/checkout" style={{ textDecoration: "none"}}>
            <div className="nav__itemBasket">
              <BsFillBasket3Fill />
              <span className="nav__itemLineTwo nav__basketCount">0</span>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Header
