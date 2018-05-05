import React, { Component } from 'react';
import './App.css';
import TileRow from './TileRow.js';

class App extends Component {

  constructor(props) {
    super(props);
    const numbers = [['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O'], ['P', 'Q', 'R', 'S', 'T'], ['U', 'V', 'W', 'X', 'Y']];
    const listItems = numbers.map((number) => 
      <TileRow numbers={number}></TileRow>);
    this.state = {list : listItems};

    // have one map here
    //the map creates tilerows
    //within a tilerow, have another map that builds the cells
    //then can have flex rows properly
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

