import React, { Component } from 'react';
import posts from './posts';
import './ViewPhotos.css';
import ReactSwipe from 'react-swipe';

class ViewPhotos extends Component {
    
    render() {
        var post = posts.getItem(this.props.itemId);

        // выводим все фото текущего поста
        var images = post.images.map((item, index) => {
            return <img src={item} 
                        key={index}
                        alt={post.title}/>
        });
        // получаем фото на которое кликаем, в метод передаем id поста и номер фото
        var image = posts.getImage(this.props.itemId, this.props.numberOfPhoto);

        // в зависимости от состояния меняем стиль 'display: hidden' and 'display: block'
        var show = {
            display: this.props.display
        };
        
        
        return (<div>
                    <div id='showAllPhotos' style={show}>
                        <div id='DesktopSlider'>
                            <div className="closeGallery" onClick={this.props.closeGallery}>&#215;</div>
                            <p onClick={this.props.prevPhoto} className='photoNavigationPrev'>&#60;</p>
                            <p onClick={this.props.nextPhoto} className='photoNavigationNext'>&#62;</p>
                            <div className='container'>
                                <img onClick={this.props.nextPhoto} src={image} alt={post.title} />
                            </div>
                        </div>
                        <div id='MobileSlider' style={show}>
                            <div className="closeGallery" onClick={this.props.closeGallery}>&#215;</div>
                            <p onClick={this.props.prevPhoto} className='photoNavigationPrev'>&#60;</p>
                            <p onClick={this.props.nextPhoto} className='photoNavigationNext'>&#62;</p>
                            <ReactSwipe key={images.length} className='container'>
                                {images}
                            </ReactSwipe>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ViewPhotos;