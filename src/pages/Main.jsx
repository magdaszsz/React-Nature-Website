import React from 'react';
import thunder from '../images/thunder.jpg';
import viteLogo from '../viteLogo.svg';
import reactLogo from '../reactLogo.svg';

function Main() {
  return (
    <div className="main-container" style={{ backgroundImage: `url(${thunder})` }}>
      <div className="main-content">
      <div className="main-title">
        <img className="react-logo" src={reactLogo} alt="" />
        <img className="vite-logo" src={viteLogo}/>
      </div>
      <p className="main-text">
       This is a practice project built with React and Vite Js <br></br><br></br>
         Fully responsive with a pull-out menu on mobile, a slider
        and a functioning search input.
      </p>
      </div>
    </div>
  );
}

export default Main
