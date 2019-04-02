import React, { Component } from 'react';

import './style.css'
import Box from './Box';

class Grid extends Component {

    renderBox = (i) =>{
        return(
            <Box
                value={this.props.boxes[i]}
                onBoxClick={() => this.props.onBoxClick(i)}
            />
        )
    }

    render() {
        return (
        <div className="Grid">
            <div className="">
                {this.renderBox(0)}
                {this.renderBox(1)}
                {this.renderBox(2)}
            </div>
            <div className="">
                {this.renderBox(3)}
                {this.renderBox(4)}
                {this.renderBox(5)}
            </div>
            <div className="">
                {this.renderBox(6)}
                {this.renderBox(7)}
                {this.renderBox(8)}
            </div>
        </div>
        );
    }
}

export default Grid;
