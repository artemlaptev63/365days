import React, { Component } from 'react';
import './ButtonToTop.css';

class ButtonToTop extends Component {

    // метод прокручивает страницу вверх
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