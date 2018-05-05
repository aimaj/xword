import React, { Component } from 'react';
import './App.css';
import TileRow from './TileRow.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.setFocus = this.setFocus.bind(this);
    //make numbers either props or state to get auto binding to work
    const numbers = [['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O'], ['P', 'Q', 'R', 'S', 'T'], ['U', 'V', 'W', 'X', 'Y']];
    const listItems = numbers.map((number, index) => 
      <TileRow onFocus={this.setFocus} key={index} row={index} numbers={number}></TileRow>);
    this.state = {numbers: numbers,
                  list : listItems,
                  focusX : 0,
                  focusY : 0};

    /*
      prompt() opens the keyboard
      If you trigger .focus() from within a .click() event (e.g. from opening your dialog), the keyboard shows up
    */
  }

  setFocus(x, y) {    
    //this.setState({focusX: x, focusY: y});
    const numbers = this.state.numbers;
    console.log(numbers);
    numbers[x][y] = 'Z';
    console.log(numbers);
    const listItems = numbers.map((number, index) => 
      <TileRow onFocus={this.setFocus} key={index} row={index} numbers={number}></TileRow>);
    this.setState = {numbers: numbers,
                  list : listItems,
                  focusX : x,
                  focusY : y};


    console.log('setting XY to ' + x + y);
  }

  render() {
    return (
      <div>
        {this.state.list}
      </div>
    );
  }
}


export default App;

