import React, { Component } from 'react';
import posts from './posts';
import './ViewPhotos.css';

class ViewPhotos extends Component {

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
                    <img onClick={this.props.nextPhoto} src={image} alt="" />
                </div>
                <div className="closeGallery" onClick={this.props.closeGallery}>&#215;</div>
                <p onClick={this.props.prevPhoto} className='photoNavigationPrev'>&#60;</p>
                <p onClick={this.props.nextPhoto} className='photoNavigationNext'>&#62;</p>
            </div>
        );
    }
}

export default ViewPhotos;