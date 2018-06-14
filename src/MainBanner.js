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
          <div className='container'>
            <div className='grid-item about-image'>
              <span className='title'>Photo by&nbsp;
                {lastItem.autor}<i>{lastItem.mainBannerTitle}</i>
              </span>
            </div>
          </div>
          <div className='grid-row-2'>
            <div className='grid-item logo'>
              <img src="assets/logo@2x.png" alt='logo-365' />
            </div>
            <div className='grid-item desc'>
              <p className='description'>
                <i>Three Sixty Five Creative</i> is an online magazine<br /> featuring one promising photographer a day.<br /> Discover and get inspired.
              </p>
            </div>
          </div>
        </div>
        <div id='welcome'>
          <h1>Want to suggest a <i>photographer</i>?</h1>
          <p>Send an email to <a href='mailto:hello.legendaryphotographers@gmail.com'><i>365creativephotography@gmail.com</i></a></p>
          <p>with the photographer’s bio and porfolio link.</p>
          <p>Our curators will notify you if your suggestion</p>
          <p>has been included into our list.</p>
        </div>
        <div className='submit-photographer'>
          <a href='mailto:hello.legendaryphotographers@gmail.com'>SUBMIT PHOTOGRAPHER</a>
        </div>
      </div>
    );
  }
}

export default MainBanner;