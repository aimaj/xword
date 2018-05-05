import React, { Component } from 'react';
import './App.css';
import Tile from './Tile.js';

class App extends Component {

  constructor(props) {
    super(props);
    const numbers = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];
    const listItems = numbers.map((number) => 
      number.map((n) => 
      <Tile text={n}></Tile>));
    this.state = {list : listItems};

    // have one map here
    //the map creates tilerows
    //within a tilerow, have another map that builds the cells
    //then can have flex rows properly
  }

  render() {
    return (
      <div className="flexTest">
        {this.state.list}
      </div>
    );
  }
}


export default App;

