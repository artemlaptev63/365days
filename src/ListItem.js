import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

class ListItem extends Component {
  render() {
    let item;
    if (this.props.item.id % 2 == 0) {
      item =  <div className = 'first-class'>
                <Link to={ this.props.path }>
                  <p>{ this.props.item.description }</p>
                </Link>
                <img src={this.props.item.image} alt={this.props.item.description} />
              </div>
    } else {
      item =  <div className = 'second-class'>
                <Link to={ this.props.path }>
                  <p>{ this.props.item.description }</p>
                </Link>
                <img src={this.props.item.image} alt={this.props.item.description} />
              </div>
    }
    return (
      <div>
        {item}
      </div>
    );
  }
}

export default ListItem;
