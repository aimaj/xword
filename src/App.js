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
                  focusX : 0,
                  focusY : 0};

    /*
      prompt() opens the keyboard
      If you trigger .focus() from within a .click() event (e.g. from opening your dialog), the keyboard shows up
    */
  }

  onKeyPress(e) {
    const numbers = this.state.numbers;
    numbers[this.state.focusX][this.state.focusY] = e.key;
    this.setState({numbers: numbers,
                  list : this.state.numbers.map((number, index) => 
      <TileRow onFocus={this.setFocus} key={index} row={index} numbers={number}></TileRow>)});
    //string comparison is allowed, as array is ordered, with primitives
    if (JSON.stringify(this.state.numbers) === JSON.stringify(this.state.win)) {
      alert('you win!');
    }
  }

  componentDidMount() {
    this.setState({list : this.state.numbers.map((number, index) => 
      <TileRow onFocus={this.setFocus} key={index} row={index} numbers={number}></TileRow>)});
  }

  //Provide coords for a cell that was clicked
  //remaps all child components, syncing should be possible but doesnt seem to work at the moment
  setFocus(x, y) {
    this.setState({focusX: x, focusY: y});
  }

  render() {
    return (
      <div class="App">
        <div class="Gameboard" onKeyPress={this.onKeyPress} tabIndex="0">{this.state.list}</div>
        <div class="Questions">Questions go here:<br/>1 Across: You wear these on your feet</div>
      </div>

    );
  }
}


export default App;

