import React, { Component } from 'react';
import posts from './posts';
import './DetailContent.css';
import { TwitterShareButton } from 'react-share';
import ViewPhotos from './ViewPhotos';

// import { FacebookShareButton, TwitterShareButton } from 'react-share';
// import { FacebookShareCount } from 'react-share';
// import { FacebookIcon } from 'react-share';


class DetailContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            like: localStorage.getItem(this.props.item),
            numberOfPhoto: 0,
            display: 'none' 
        };
    }

    

    like() {   
        if(String(this.state.like) === 'null') {
            this.setState({like: 'true'});
            localStorage.setItem(this.props.item, 'true');
        } else {
            this.setState({like: 'null'});
            localStorage.setItem(this.props.item, 'null');
        }
    }
    viewPhotos (index) {
        this.setState({ numberOfPhoto: index });
        this.setState({ display: 'block' });
    }



    closeGallery() {
        this.setState({ display: 'none' })
    }
    nextPhoto() {
        if (this.state.numberOfPhoto.toString() === (this.props.imagesLength - 1).toString() ) {
            this.setState({numberOfPhoto: 0})
            return;
        }
        this.setState({numberOfPhoto: this.state.numberOfPhoto + 1})
    }
    prevPhoto() {
        if (Number(this.state.numberOfPhoto) === 0) {
            this.setState({numberOfPhoto: this.props.imagesLength - 1})
            return;
        }
        this.setState({numberOfPhoto: this.state.numberOfPhoto - 1})
    }





    componentWillMount() {
        localStorage.setItem(this.props.item, localStorage.getItem(this.props.item));
        this.setState({
            like: localStorage.getItem(this.props.item)
        })
        this.setState({display: 'none'})
    }
    componentWillReceiveProps(nextProps) {
        localStorage.setItem(nextProps.item, localStorage.getItem(nextProps.item));
        this.setState({
            like: localStorage.getItem(nextProps.item)
        })
    }

    render() {
        var post = posts.getItem(this.props.item);

        var images = post.images.map((item, index) => {
            return <img src={item} 
                        key={index}
                        alt={item.title}
                        onClick={this.viewPhotos.bind(this, index)}/>
        });

        let likeIcon;
        if (this.state.like !== "true") {
            likeIcon = 'assets/icons/like-false.png';
        } else {
            likeIcon = 'assets/icons/like-true.png';
        }


        if (this.state.display === "none") {
            document.body.style.overflow = 'visible';
        } else {
            document.body.style.overflow = 'hidden';
        }


        let className;
        if (post.id % 2 === 0) {
            className = 'left-item-like';
        } else {
            className = 'right-item-like';
        }

        var twitterButton = {
            width: '30px',
            outline: 'none',
            cursor: 'pointer'
        }

        var viewPhotos;
        viewPhotos = <div>
                        <ViewPhotos nextPhoto={this.nextPhoto.bind(this)} prevPhoto={this.prevPhoto.bind(this)} closeGallery={this.closeGallery.bind(this)} display={this.state.display} item={this.props.item} numberOfPhoto={this.state.numberOfPhoto}/>
                     </div>    


        return (
            <div>
                <div id='detail-content'>
                    <div className='social-media'>
                        <p><img onClick = {this.like.bind(this)} className={className} src={likeIcon} alt='like' /></p>
                        <TwitterShareButton style={twitterButton} url={'https://365daysofphotos.netlify.com/#/detail/' + post.id}
                                            title={post.description}>
                            <p><img src='assets/icons/twitter.png' alt='twitter' /></p>
                        </TwitterShareButton>
                        <p><img src='assets/icons/instagram.png' alt='instagram' /></p>
                    </div>
                    <div className='detail-description'>
                        <p className='number-of-item'><i>#{post.id}</i><span>{post.title}</span></p>
                        <p className='autor'>By <i>{post.autor}</i></p>
                        <p className='description'>{post.description}</p>
                        <div className='all-images'>
                            {images}
                        </div>
                    </div>
                </div>
                <div>
                    {viewPhotos}
                </div>
            </div>
        );
    }
}

export default DetailContent;