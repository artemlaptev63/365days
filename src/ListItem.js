import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posts from './posts';
import './ListItem.css';
// import Like from './Like';

class ListItem extends Component {
  constructor(props) {
        super(props);
        this.state = { like: localStorage.getItem(this.props.item.id) };
    }
    like() {   
        if(this.state.like == 'null') {
            this.setState({like: 'true'});
            localStorage.setItem(this.props.item.id, 'true');
        } else {
            this.setState({like: 'null'});
            localStorage.setItem(this.props.item.id, 'null');
        }
    }
    componentWillMount() {
        localStorage.setItem(this.props.item.id, localStorage.getItem(this.props.item.id));
        this.setState({
            like: localStorage.getItem(this.props.item.id)
        })
    }

  
  render() { 
  let likeIcon;
        if (this.state.like !== "true") {
            likeIcon = 'assets/icons/like-false.png';
        } else {
            likeIcon = 'assets/icons/like-true.png';
        }


        let className;
        if (this.props.item.id % 2 === 0) {
            className = 'left-item-like';
        } else {
            className = 'right-item-like';
        }
  
    var mainPhotoItem = {
      background: 'url('+ this.props.item.mainImage +') no-repeat'
    }
    var secondaryPhoto1 = {
      background: 'url('+ this.props.item.image1 +') no-repeat'
    }
    var secondaryPhoto2 = {
      background: 'url('+ this.props.item.image2 +') no-repeat'
    }
    var secondaryPhoto3 = {
      background: 'url('+ this.props.item.image3 +') no-repeat'
    } 


    let item;
    if (this.props.item.id % 2 === 0) {
      item =  <div className = 'left-item'>
                <div className='delimiter'></div>
                <div className='flex'>
                  <div className='main-photo' style={mainPhotoItem}>
                    <Link to={ this.props.path }>
                      <p className='photos-number-left'>#{this.props.item.id}</p>
                      <p className='link-to-detail-left'>View Gallery</p>
                    </Link>
                  </div>
                  <div>
                    <div className="secondary-photo-left">
                      <p style={secondaryPhoto1}></p>
                    </div>
                    <div className="secondary-photo-left">
                      <p style={secondaryPhoto2}></p>
                    </div>
                    <div className="secondary-photo-left">
                      <p style={secondaryPhoto3}></p>
                    </div>
                  </div>
                  <div className='about-image-left-item'>
                    <p><b>{ this.props.item.title }</b><br />
                       By <i>{ this.props.item.autor }</i></p>
                    <img onClick = {this.like.bind(this)} className={className} src={likeIcon} />

                  </div>
                </div>
              </div>
    } else {
      item =  <div className = 'right-item'>
                <div className='delimiter'></div>
                <div className='flex'>
                  <div className='about-image-right-item'>
                    <p><b>{ this.props.item.title }</b><br />
                       By <i>{ this.props.item.autor }</i></p>
                    <img onClick = {this.like.bind(this)} className={className} src={likeIcon} />

                  </div>
                  <div>
                    <div className="secondary-photo-right">
                      <p style={secondaryPhoto1}></p>
                    </div>
                    <div className="secondary-photo-right">
                      <p style={secondaryPhoto2}></p>
                    </div>
                    <div className="secondary-photo-right">
                      <p style={secondaryPhoto3}></p>
                    </div>
                  </div>
                  <div className='main-photo' style={mainPhotoItem}>
                    <Link to={ this.props.path }>
                      <p className='photos-number-right'>#{this.props.item.id}</p>
                      <p className='link-to-detail-right'>View Gallery</p>
                    </Link>
                  </div>
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
