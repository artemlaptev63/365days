import React, { Component } from 'react';
import posts from './posts';
import './MainBanner.css';

class MainBanner extends Component {
  render() {
    // включаем прокрутку
    document.body.style.overflow = 'visible';
    // записываем в переменную последний пост
    var lastItem = posts.getLastItem();

    // записываем в переменную стиль с background из главного фото последнего поста
    var mainBanner = {
      background: 'url(' + lastItem.mainImage + ') no-repeat'
    }

    return (
      <div>
        <div style={mainBanner} id='main-banner'>
          <div className='grid-row-1'>
            <div className='grid-item about-image'>
              <p className='autor'>By <i>{lastItem.autor}</i></p>
              <p className='title'>{lastItem.title}</p>
            </div>
          </div>
          <div className='grid-row-2'>
            <div className='grid-item logo'>
              <img src="assets/logo@2x.png" alt='logo-365' />
            </div>
            <div className='grid-item desc'>
              <p className='description'>
                <i>365 Days</i> is a blog<br />
                featuring exceptional works of art.<br />
                One talented artist a day.<br />
                2018 is the year of <i>photography</i>.
                            </p>
            </div>
          </div>
        </div>
        <div id='welcome'>
          <h1>Want to be a <i>featured</i> artist?</h1>
          <p>Send an email to <a href='mailto:hello.legendaryphotographers@gmail.com'><i>hello.legendaryphotographers@gmail.com</i></a></p>
          <p>with your story and porfolio link.</p>
          <p>If your work is selected, our curators will be in touch.</p>
        </div>
      </div>
    );
  }
}

export default MainBanner;