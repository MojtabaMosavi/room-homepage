import React from "react";
import { useState } from "react";

const HamburgerMenu = () => {
    const [toggle,setToggle] = useState(false);

    return (
        <button 
        className={`header__hamburger-nav ${toggle ? "hamburger-nav--active":"hamburger-nav" }`}
        aria-label="navigation menu"
        aria-expanded ={toggle ? "true" : "false"}
        aria-controls="menu"
        type="button"
        onClick={()=> {setToggle(toggle => !toggle)} }
        >
        <span className="hamburger-nav__bar" aria-hidden="true"></span>
    </button>
    );
}
 
export default HamburgerMenu;