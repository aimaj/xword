import React, { Component } from 'react';
import './App.css';
import Tile from './Tile.js';

class App extends Component {

  constructor(props) {
    super(props);
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => 
      <Tile text={number}></Tile>);
    this.state = {list : listItems};
  }

  render() {
    return (
      this.state.list
    );
  }
}


export default App;

