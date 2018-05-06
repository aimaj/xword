import React, { Component } from 'react';
import './App.css';
import TileRow from './TileRow.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.setFocus = this.setFocus.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    //initial state of the game board
    const currentState = [['', '', '', '', ''], ['', '0', '0', '', '0'], ['', '', '', '', ''], ['', '0', '0', '', '0'], ['', '0', '0', '', '0']];
    const winState = [['A', 'P', 'P', 'L', 'E'], ['R', '0', '0', 'I', '0'], ['B', 'E', 'A', 'N', 'O'], ['O', '0', '0', 'E', '0'], ['R', '0', '0', 'S', '0']];
    this.state = {numbers: currentState,
                  win: winState,
                  direction : 0,
                  focusX : 0,
                  focusY : 0};

    /*
      prompt() opens the keyboard
      If you trigger .focus() from within a .click() event (e.g. from opening your dialog), the keyboard shows up
    */
  }

  onKeyPress(e) {
    const numbers = this.state.numbers;
    numbers[this.state.focusY][this.state.focusX] = e.key;
    var focusY = this.state.focusY;
    var focusX = this.state.focusX;
    if (this.state.direction === 0) {
      //down
      focusY++;
    } else {
      focusX++;
    }
    this.setState({focusX: focusX, focusY: focusY, numbers: numbers});
    //string comparison is allowed, as array is ordered, with primitives
    if (JSON.stringify(this.state.numbers) === JSON.stringify(this.state.win)) {
      alert('you win!');
    }
  }

  //Provide coords for a cell that was clicked
  setFocus(x, y) {
    if (this.state.focusX === x && this.state.focusY === y) {
      if (this.state.direction === 0) {
        this.setState({direction: 1});
      } else {
        this.setState({direction: 0});        
      }
    } else {
      this.setState({focusX: x, focusY: y});
    }
  }

  render() {
    var list = this.state.numbers.map((number, index) => 
      <TileRow onFocus={this.setFocus} key={index} focusY={this.state.focusY} focusX={this.state.focusX} direction={this.state.direction} row={index} numbers={number}></TileRow>);
    return (
      <div className="App">
        <div className="Gameboard" onKeyPress={this.onKeyPress} tabIndex="0">{list}</div>
        <div className="Questions">Questions go here:<br/>1 Across: You wear these on your feet</div>
      </div>

    );
  }
}


export default App;

