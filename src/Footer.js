import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div className='logo'>
                    <p>
                        <img src='../assets/logo@2x.png' alt='logo-365' />
                    </p>
                    <p className='right'>All rights reserved</p>
                </div>
                <div className='write-us'>
                    <p className='overline'>
                        Send your submissions to<br />
                        <a href='mailto:hello.legendaryphotographers@gmail.com'><i>365creativephotography@gmail.com</i></a> <br />
                        for a chance to be featured.
                    </p>
                    <p className='to-instagram overline'>Follow us on Instagram:<br /><a href='https://www.instagram.com/legendaryphotography.magazine/' target="_blank" rel="noopener noreferrer"><i>@365creative.photography</i></a></p>
                    <p className='version'>v1.0.12</p>
                </div>
            </div>
        );
    }
}

export default Footer;