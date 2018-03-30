import React, { Component } from 'react';
import posts from './posts';

class MainBanner extends Component {
  render() {
    var lastItem = posts.getLastItem();
    return (
        <div>
            <img src={lastItem.image} alt={lastItem.description} />
        </div>
    );
  }
}

export default MainBanner;