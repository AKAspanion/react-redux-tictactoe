import React, { Component } from 'react';

import './style.css'

class Box extends Component {

    onButtonClick = () =>{
        this.props.onBoxClick()
    }

    render() {
        return (
            <button
                className="box"
                onClick={this.onButtonClick}
            >
            {this.props.value}
            </button>
        );
    }
}

export default Box;
