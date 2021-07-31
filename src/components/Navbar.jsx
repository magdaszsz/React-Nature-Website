import React, {useState} from 'react';
import { WiFire } from "react-icons/wi";
import {NavLink} from 'react-router-dom';
import { GoThreeBars } from "react-icons/go";
import { GoX } from "react-icons/go";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false)
  return (
    <>
      <nav>
        <NavLink exact to="/">
          <WiFire class="logo" onClick={() => setClick(false)} />
        </NavLink>

        <div onClick={() => setClick(!click)} className="menu-icon">
          {click ? <GoX /> : <GoThreeBars />}
        </div>
        <ul className={click ? "nav-menu show" : "nav-menu"}>
          <li>
            <NavLink exact to="/mountains" onClick={() => setClick(false)}>
              Mountains
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/water" onClick={() => setClick(false)}>
              Water
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar
