import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posts from './posts';
import './ListItem.css';

class ListItem extends Component {
  render() {   
    var mainPhotoItem = {
      background: 'url('+ this.props.item.mainImage +') no-repeat'
    } 
    let item;
    if (this.props.item.id % 2 === 0) {
      item =  <div className = 'left-item'>
                <div className='delimiter'></div>
                <div className='left-flex'>
                  <div className='main-photo' style={mainPhotoItem}>
                    <Link to={ this.props.path }>
                      <p className='photos-number'>#{this.props.item.id}</p>
                      <p className='link-to-detail'>View Gallery</p>
                    </Link>
                  </div>
                  <div>
                    <div className="secondary">
                      <p><img src={this.props.item.image1} /></p>
                    </div>
                    <div className="secondary">
                      <p><img src={this.props.item.image2} /></p>
                    </div>
                    <div className="secondary">
                      <p><img src={this.props.item.image3} /></p>
                    </div>
                  </div>
                  <div className='about-image-left-item'>
                    <p><b>Girls</b><br />
                       By <i>Irina Manning</i></p>
                  </div>
                </div>
              </div>
    } else {
      item =  <div className = 'right-item'>
                <div className='delimiter'></div>
                <div className='right-flex'>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
    }
    return (
      <div>
        {item}
      </div>
    );
  }
}

export default ListItem;
