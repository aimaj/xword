import React, { Component } from 'react';
import './App.css';
import TileRow from './TileRow.js';

class App extends Component {

  constructor(props) {
    super(props);
    const numbers = [['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O'], ['P', 'Q', 'R', 'S', 'T'], ['U', 'V', 'W', 'X', 'Y']];
    const listItems = numbers.map((number, index) => 
      <TileRow key={index} row={index} numbers={number}></TileRow>);
    this.state = {list : listItems};

    /*
      prompt() opens the keyboard
      If you trigger .focus() from within a .click() event (e.g. from opening your dialog), the keyboard shows up
    */
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

