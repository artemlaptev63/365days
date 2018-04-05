import React, { Component } from 'react';
import posts from './posts';

class Detail extends Component {
  render() {
    var post = posts.getItem(this.props.match.params.id);
    return (
      <div>
        <p>{post.description}</p>
      </div>
    );
  }
}

export default Detail;