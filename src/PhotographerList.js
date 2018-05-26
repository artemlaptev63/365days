import React, { Component } from 'react';
import posts from './posts';
import ListItem from './ListItem';
import MainBanner from './MainBanner';
import ButtonToTop from './ButtonToTop';
import Footer from './Footer';
import './PhotographerList.css';
import { Helmet } from "react-helmet";

class PhotographerList extends Component {
  constructor(props) {
    super(props);
    // показываем 10 постов
    this.state = { numItems: 10 };
  }

  // показываем еще 10 постов
  showMore() {
    this.setState({ numItems: this.state.numItems + 10 })
  }


  render() {

    // записываем в переменную 10 постов в обратном порядке
    var reversePosts = posts.getReverseArray(this.state.numItems);

    // выводим на страницу 10 постов
    var post = reversePosts.map((item, index) => {
      return <ListItem
        key={index}
        path={'/detail/' + item.id}
        item={item} />
    })

    // кнопка показать больше выводится на странице пока есть непоказанные посты
    // в противном случае не кнопка не выводится на странице
    let buttonShowMore;
    if (this.state.numItems < posts.data.length) {
      buttonShowMore = <div className='show-more'>
        <button onClick={this.showMore.bind(this)}>SHOW 10 PREVIOUS POSTS</button>
      </div>;
    }

    return (
      <div>
        {/* this code for document.head */}
        <Helmet>
          <title>Legendary Photographers</title>
          <meta name='description' content='The best photos in the world' />
        </Helmet>
        {/* this code for document.head */}
        <MainBanner />
        {post}
        {buttonShowMore}
        <ButtonToTop />
        <Footer />
      </div>
    );
  }
}

export default PhotographerList;