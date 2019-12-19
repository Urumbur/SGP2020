import React from 'react';
import logo from './SGP_logo.png';
import { Link, useLocation } from 'react-router-dom';

const TopBar = () => {

  let location = useLocation();
  
  return (
    <div className="fix">
      <header className="top">
          <img className="logo" src={logo} alt=""/>
          <h1 className="title">SGP 2020</h1>
          <Link to="/">
            <nav className={`burger ${location.pathname === '/' ? "" : "back"}`}>
              <div className="bar" id="bar1"></div>
              <div className="bar" id="bar2"></div>
              <div className="bar" id="bar3"></div>
            </nav>
          </Link>            
      </header>
    </div>  
   );
}
 
export default TopBar;