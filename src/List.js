import React, { Component } from 'react';
import posts from './posts';
import ListItem from './ListItem';
import MainBanner from './MainBanner';
import ButtonToTop from './ButtonGoBackToTop';
import Footer from './Footer';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 };
        window.scrollTo( 0, 0 );
    }

    showMore() {
        this.setState({ count: this.state.count + 10 })
    }

    render() {
        document.title = '365 Days Of Photos';
        document.querySelector('meta[name="description"]').content = "365 Days Of Photos, The best photo in the internet";
        var reversePosts = posts.getReverseArray(this.state.count);
        var post = reversePosts.map((item, index) => {
            return <ListItem
                        key={index} 
                        path={'/detail/' + item.id}
                        item = {item} />
        })


        let buttonShowMore;
        if ( this.state.count < posts.data.length ) {
            buttonShowMore = <div className='show-more'>
                                <button onClick={this.showMore.bind(this)}>SHOW 10 PREVIOUS POSTS</button>
                             </div>;
        }

        return (
            <div>
                <MainBanner />
                {post}
                {buttonShowMore}
                <ButtonToTop />
                <Footer />
            </div>
        );
    }
}

export default List;