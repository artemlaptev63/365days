import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItem extends Component {
  render() {
    return (
      <div>
        <Link to={ this.props.path }>
          <p>{ this.props.item.description }</p>
        </Link>
        <img src={this.props.item.image} alt={this.props.item.description} />
      </div>
    );
  }
}

export default ListItem;