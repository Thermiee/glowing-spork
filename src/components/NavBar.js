import React, { Component } from 'react';
import './Navbar.css';

export default class NavBar extends Component {
  render() {
    return (
    <div className='navbar'>
    <div className='nav-items'>
            <ul>
                <li>women</li>
                <li>men</li>
                <li>kids</li>
            </ul>
        </div>
        <div  className='nav-items'>
                <ul>
                    <li>$</li>
                <li>cart</li>
                </ul>
            </div>
            </div>
    )
  }
}
