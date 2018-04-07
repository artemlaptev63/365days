import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div>
            <img src='assets/logo@2x.png' />
        </div>
        <div className='form-for-email'>
            <p>Subscribe for weekly inspiration</p>
            <input type='email' placeholder="Enter Your Email" />
        </div>
      </div>
    );
  }
}

export default Header;