import React, { Component } from 'react';
import {connect} from 'react-redux';

import {updateGrid, resetGrid} from '../actions'
import Grid from './Grid';
import './style.css'

class App extends Component {
    handleClick = (i) =>{
        const current = this.props.boxes
        if (calculateWinner(current) || current[i]) {
            return;
        }
        current[i] = this.props.xIsNext ? 'X' : 'O'
        this.props.updateGrid({
            boxes: current
        })
    }
    isGameOver = (current) =>{
        return current.every((e) =>{
            return e !== null
        })
    }
    reset = () =>{
        this.props.resetGrid({
            boxes: Array(9).fill(null),
            xIsNext: true
        })
    }
    render() {
        const current = this.props.boxes;
        const winner = calculateWinner(current);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {            
            if(this.isGameOver(current)){
                status = 'Game Over!!'
            }
            else{
                status = "Next player " + (this.props.xIsNext ? "X" : "O");
            }
        }
        return (
            <div className="game">
                <div className="app">
                    <Grid
                        boxes={this.props.boxes}
                        onBoxClick={(i) => this.handleClick(i)}
                    />       
                </div>            
                <div>{status}</div>
                <div>
                    <br />
                    <button 
                        onClick={this.reset}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

const calculateWinner = (boxes) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return boxes[a];
        }
    }
    return null;
}

const mapStateToProps =(state) =>{
    return{
        boxes: state.game.boxes,
        xIsNext: state.game.xIsNext
    }
}

export default connect(mapStateToProps, {updateGrid, resetGrid})(App);
