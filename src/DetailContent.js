import React, { Component } from 'react';
import posts from './posts';
import './DetailContent.css';


class DetailContent extends Component {
    constructor(props) {
        super(props);
        this.state = { like: localStorage.getItem(this.props.item) };
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
    componentWillMount() {
        localStorage.setItem(this.props.item, localStorage.getItem(this.props.item));
        this.setState({
            like: localStorage.getItem(this.props.item)
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props.item, nextProps.item);
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
                        alt={item.title}/>
        });

        let likeIcon;
        if (this.state.like !== "true") {
            likeIcon = 'assets/icons/like-false.png';
        } else {
            likeIcon = 'assets/icons/like-true.png';
        }


        let className;
        if (post.id % 2 === 0) {
            className = 'left-item-like';
        } else {
            className = 'right-item-like';
        }


        return (
            <div id='detail-content'>
                <div className='social-media'>
                    <p><img onClick = {this.like.bind(this)} className={className} src={likeIcon} alt='like' /></p>
                    <p><img src='assets/icons/like-false.png' alt='twitter' /></p>
                    <p><img src='assets/icons/like-false.png' alt='instagram' /></p>
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
        );
    }
}

export default DetailContent;