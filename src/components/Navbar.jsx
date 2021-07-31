import React, {useState} from 'react';
import { WiFire } from "react-icons/wi";
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
   <>
   <nav className="navbar">
   
      <div>
      <NavLink 
      exact to="/"><WiFire class="logo"/></NavLink>
      </div>
      <ul>
        <li>
          <NavLink exact to="/mountains">
          Mountains
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/water">
          Water
          </NavLink>
        </li>
      </ul>
   
   </nav>
   </>
  )
}

export default Navbar
