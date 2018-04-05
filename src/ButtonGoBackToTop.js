import React, { Component } from 'react';
import './ButtonGoBackToTop.css';

class ButtonToTop extends Component {
    goUp() {
        window.scrollTo( 0, 0 );     
    }   
    render() {
        return (
            <div className='button-go-up'>
                <button onClick={this.goUp.bind(this)}>Go back to top</button>
            </div>
        );
    }
}

export default ButtonToTop;