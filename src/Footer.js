import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div className='flex'>
                    <div className='logo'>
                        <img src="assets/logo@2x.png" />
                    </div>
                    <div className='write-us'>
                        <p>
                            Send your submissions to <br />
                                <a href='mailto:365day.photography@gmail.com'><i>365day.photography@gmail.com</i></a> <br />
                            for a chance to be featured. <br />
                        </p>
                    </div>
                </div>
                <p className='to-instagram'>Follow us on Instagram: <a href='#'><i>@365days.photography</i></a></p>
            </div>
        );
    }
}

export default Footer;