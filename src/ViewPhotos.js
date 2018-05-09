import React, { Component } from 'react';
import posts from './posts';
import './ViewPhotos.css';

class ViewPhotos extends Component {
    render() {

        var post = posts.getItem(this.props.item);
        var image = posts.getImage(this.props.item, this.props.numberOfPhoto);

        var show = {
            display: this.props.display
        };

        return (
            // <div id="showAllPhotos" style={show}>
            //     <div className="closeGallery" onClick={this.props.closeGallery}>&#215;</div>
            //     <p onClick={this.props.prevPhoto} className='photoNavigationPrev'>&#60;</p>
            //     <p onClick={this.props.nextPhoto} className='photoNavigationNext'>&#62;</p>


            //     <div className='thisImage'>
            //         <img onClick={this.props.nextPhoto} src={image} alt={image} />
            //     </div>  
            // </div>

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