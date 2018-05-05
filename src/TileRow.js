import React, { Component } from 'react';
import Tile from './Tile.js';
import './TileRow.css';

class TileRow extends Component {
  constructor(props) {
    super(props);
    const listItems = this.props.numbers.map((number) => 
      <Tile text={number}></Tile>);
    this.state = {list : listItems};

    // have one map here
    //the map creates tilerows
    //within a tilerow, have another map that builds the cells
    //then can have flex rows properly
  }

  render() {
    return (
      <div className="TileRow">
        {this.state.list}
      </div>
    );
  }
}


export default TileRow;