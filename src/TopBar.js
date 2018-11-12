import React, { Component } from 'react';
import logo from './SGP_logo.png';
import './style.css';

class TopBar extends Component {
  render() {
    return (
        <header className="top">
            <img className="logo" src={logo} alt=""/>
            <h1 className="title">SGP 2019</h1>
            <nav className="burger">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </nav>
        </header>
    );
  }
}

export default TopBar;