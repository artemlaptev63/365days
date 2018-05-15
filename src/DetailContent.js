import React, { Component } from 'react';
import posts from './posts';
import './DetailContent.css';
// кнопка чтобы поделиться в Twitter
import { TwitterShareButton } from 'react-share';
import ViewPhotos from './ViewPhotos';

// import { FacebookShareButton, TwitterShareButton } from 'react-share';
// import { FacebookShareCount } from 'react-share';
// import { FacebookIcon } from 'react-share';


class DetailContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // берем состояние из localStorage 
            like: localStorage.getItem(this.props.itemId),
            // состояние по умолчанию
            numberOfPhoto: 0,
            viewPhotosDisplay: 'none'
        };
    }


    // метод для сохранения состояния лайка
    like() {
        // если условие верно устанавливаем состояние лайка true
        // и записываем состояние в localStorage
        if (String(this.state.like) === 'null') {
            this.setState({ like: 'true' });
            localStorage.setItem(this.props.itemId, 'true');
            // в противном случае устанавливаем состояние лайка null
            // и записываем состояние в localStorage
        } else {
            this.setState({ like: 'null' });
            localStorage.setItem(this.props.itemId, 'null');
        }
    }


    // открытие слайдера ViewPhotos.js
    // при клике устанавливаем состояние 
    viewPhotos(index) {
        this.setState({ numberOfPhoto: index });
        this.setState({ viewPhotosDisplay: 'block' });
    }


    // при клике закрываем слайдер
    closeGallery() {
        this.setState({ viewPhotosDisplay: 'none' })
    }


    // следующее фото 
    nextPhoto() {
        // если фото последнее, обнуляем состояние и открываем первое фото
        if (this.state.numberOfPhoto.toString() === (this.props.imagesLength - 1).toString()) {
            this.setState({ numberOfPhoto: 0 })
            return;
        }
        this.setState({ numberOfPhoto: this.state.numberOfPhoto + 1 })
    }


    // предыдущее фото 
    prevPhoto() {
        // если фото первое, открываем последнее фото
        if (Number(this.state.numberOfPhoto) === 0) {
            this.setState({ numberOfPhoto: this.props.imagesLength - 1 })
            return;
        }
        this.setState({ numberOfPhoto: this.state.numberOfPhoto - 1 })
    }


    // метод вызывается перед render
    componentWillMount() {
        // заносим данные в localStorage
        localStorage.setItem(this.props.itemId, localStorage.getItem(this.props.itemId));
        // изменяем state
        this.setState({
            like: localStorage.getItem(this.props.itemId)
        })
        // перед render скрываем слайдер
        this.setState({ viewPhotosDisplay: 'none' })
    }


    // вызывается при обновлении props
    componentWillReceiveProps(nextProps) {
        // функция отлавливает следущий props и устанавливает значение в localStorage и меняет состояние
        localStorage.setItem(nextProps.itemId, localStorage.getItem(nextProps.itemId));
        this.setState({
            like: localStorage.getItem(nextProps.itemId)
        })
    }


    render() {
        // получаем пост, на вход передаем id поста
        var post = posts.getItem(this.props.itemId);

        // выводим все фото текущего поста
        var images = post.images.map((item, index) => {
            return <img src={item}
                key={index}
                alt={post.title}
                onClick={this.viewPhotos.bind(this, index)} />
        });

        // в зависимости от состояния выводим картинку лайка
        let likeIcon;
        if (this.state.like !== "true") {
            likeIcon = 'assets/icons/like-false.png';
        } else {
            likeIcon = 'assets/icons/like-true.png';
        }

        // в зависимости от состояния включаем и отключаем прокрутку
        if (this.state.viewPhotosDisplay === "none") {
            document.body.style.overflow = 'visible';
            document.body.style.position = 'static';
        } else {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
        }

        // присваиваем классы постам с четными и нечетными id
        let className;
        if (post.id % 2 === 0) {
            className = 'left-item-like';
        } else {
            className = 'right-item-like';
        }

        // стиль для иконки Twitter
        var twitterButton = {
            width: '30px',
            outline: 'none',
            cursor: 'pointer'
        }
        return (
            <div>
                <div id='detail-content'>
                    <div className='social-media'>
                        <p>
                            <img onClick={this.like.bind(this)}
                                className={className}
                                src={likeIcon}
                                alt='like' />
                        </p>
                        <TwitterShareButton style={twitterButton}
                            url={'https://365daysofphotos.netlify.com/#/detail/' + post.id}
                            title={post.description}>
                            <p>
                                <img src='assets/icons/twitter.png' alt='twitter' />
                            </p>
                        </TwitterShareButton>
                        <p>
                            <img src='assets/icons/instagram.png' alt='instagram' />
                        </p>
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
                    <ViewPhotos
                        nextPhoto={this.nextPhoto.bind(this)}
                        prevPhoto={this.prevPhoto.bind(this)}
                        closeGallery={this.closeGallery.bind(this)}
                        display={this.state.viewPhotosDisplay}
                        itemId={this.props.itemId}
                        numberOfPhoto={this.state.numberOfPhoto}
                    />
                </div>
            </div>
        );
    }
}

export default DetailContent;