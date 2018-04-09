import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div>
          <Link to='/'>
            <img src='assets/logo@2x.png' alt='logo-365'/>
          </Link>
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