import React, { Component } from 'react';
import posts from './posts';
import ListItem from './ListItem';
import MainBanner from './MainBanner';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 };
    }

    showMore() {
        this.setState({count: this.state.count + 10})
    }

    render() {
        var reversePosts = posts.getReverseArray(this.state.count);
        var post = reversePosts.map((item, index) => {
            return <ListItem
                        key={index} 
                        path={'/detail/' + item.id}
                        item = {item} />
        })


        let buttonShow;
        if ( this.state.count < posts.data.length ) {
            buttonShow = <button onClick={this.showMore.bind(this)}>Show more</button>;
        }

        return (
            <div>
                <MainBanner />
                {post}
                {buttonShow}
            </div>
        );
    }
}

export default List;