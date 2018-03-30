import React, { Component } from 'react';
import posts from './posts';
import ListItem from './ListItem';
import MainBanner from './MainBanner';

class List extends Component {
  render() {
    var reversePosts = posts.getReverseArray();
    var post = reversePosts.map((item, index) => {
        return <ListItem
                    key={index} 
                    path={'/detail/' + item.id}
                    item = {item} />
    })
    return (
        <div>
            <MainBanner />
            {post}
        </div>
    );
  }
}

export default List;