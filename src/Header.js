import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div>
          <Link to='/'>
            <img src='assets/logo@2x.png' alt='logo-365' />
          </Link>
        </div>
        <div className='form-for-email'>
          <p>Subscribe for weekly inspiration</p>
          {/* <form>
          <input type='email' placeholder="Enter Your Email" />
          <button>SUBSCRIBE</button>
          </form> */}
          <div id="mc_embed_signup">
            <form action="https://gmail.us9.list-manage.com/subscribe/post?u=f781c1fc1510a1ae4a7684179&amp;id=d3e2eebd35" method="post"
              id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
                <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div style={{
                  position: 'absolute',
                  left: -5000 + 'px'
                }} aria-hidden="true">
                  <input type="text" name="b_f781c1fc1510a1ae4a7684179_d3e2eebd35" tabIndex="-1" value="" />
                </div>
                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;