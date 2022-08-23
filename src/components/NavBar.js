import React, { Component } from 'react';
import './Navbar.css';
import logo from '../images/icon.png';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-items">
          <ul>
            <li>women</li>
            <li>men</li>
            <li>kids</li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="Brand logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>$</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    );
  }
}
