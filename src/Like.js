import React, { Component } from 'react';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = { like: localStorage.getItem(this.props.id) };
    }
    like() {   
        if(this.state.like == 'null') {
            this.setState({like: 'true'});
            localStorage.setItem(this.props.id, 'true');
        } else {
            this.setState({like: 'null'});
            localStorage.setItem(this.props.id, 'null');
        }
    }
    componentWillMount() {
        localStorage.setItem(this.props.id, localStorage.getItem(this.props.id));
        this.setState({
            like: localStorage.getItem(this.props.id)
        })
    }
    render() {

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