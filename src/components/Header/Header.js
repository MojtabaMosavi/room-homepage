import React from "react";
import { useState } from "react";
import logo from "../../assets/images/logo.svg"
import HamburgerMenu from "./HamburgurMenu";

const Header = () => {

    return (    
        <header className="header">
            <div className="header__wrapper container">
                <div className="header__logo logo">
                    <img className="logo__image" src={logo}></img>
                </div>
                <HamburgerMenu/>
                <ul className="header__menu menu" id="navigation" >
                    <li className="menu__item">
                        <a className="menu__link">Home</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link">Shop</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link">About</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
 
export default Header;