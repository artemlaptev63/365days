import React, { Component } from 'react';
import posts from './posts';
import './ViewPhotos.css';



class ViewPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state для координат(for swipe)
      xDown: null,
      yDown: null
    };
  }


  // отлавливает начальные координаты
  handleTouchStart(evt) {
    this.setState({ xDown: evt.touches[0].clientX })
    this.setState({ yDown: evt.touches[0].clientY })
  }

  // отлавливает направление swipe
  handleTouchMove(evt) {
    if (!this.state.xDown || !this.state.yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = this.state.xDown - xUp;
    var yDiff = this.state.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
      if (xDiff > 0) {
        this.props.nextPhoto();
        console.log('next');
      } else {
        this.props.prevPhoto();
        console.log('prev');
      }
    } else {
      if (yDiff > 0) {
        this.props.closeGallery();
        console.log('close');
      } else {
        this.props.closeGallery();
        console.log('close');
      }
    }
    /* reset values */
    this.setState({ xDown: null })
    this.setState({ yDown: null })
  };

  render() {
    // получаем фото на которое кликаем, в метод передаем id поста и номер фото
    var image = posts.getImage(this.props.itemId, this.props.numberOfPhoto);

    // в зависимости от состояния меняем стиль 'display: hidden' and 'display: block'
    var show = {
      display: this.props.display
    };


    return (
      <div id='showAllPhotos' style={show}>
        <div className='container'>
          <img onClick={this.props.nextPhoto} onTouchStart={this.handleTouchStart.bind(this)} onTouchMove={this.handleTouchMove.bind(this)} src={image} alt="" />
        </div>
        <div className="closeGallery" onClick={this.props.closeGallery}>&#215;</div>
        <p onClick={this.props.prevPhoto} className='photoNavigationPrev'>&#60;</p>
        <p onClick={this.props.nextPhoto} className='photoNavigationNext'>&#62;</p>
      </div>
    );
  }
}

export default ViewPhotos;