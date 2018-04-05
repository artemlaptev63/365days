import React, { Component } from 'react';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = { like: 'false' };
    }
    like(){   
        if(this.state.like == 'false') {
            this.setState({like: 'true'})
        } else {this.setState({like: 'false'})}
    }
    componentWillMount() {
        localStorage.setItem(this.props.id, localStorage.getItem(this.props.id));
        this.setState({
            like: localStorage.getItem(this.props.id)
        })
    }
    componentWillUpdate(nextProps, nextState) {
        if(this.state.like === 'false') {
            localStorage.setItem(this.props.id, 'true');
        } else {
            localStorage.setItem(this.props.id, 'false');
        }
    }
    render() {
        // this.test();
        // localStorage.clear();
        console.log(this.state.like);
        let likeIcon;
        if (this.state.like !== "true") {
          likeIcon = 'assets/icons/like-false.png';
        } else {
          likeIcon = 'assets/icons/like-true.png';
        }


        let className;
        if (this.props.id % 2 === 0) {
            className = 'left-item-like';
        } else {
            className = 'right-item-like';
        }

    return (
      <div>
        <img onClick = {this.like.bind(this)} className={className} src={likeIcon} />
      </div>
    );
  }
}

export default Like;