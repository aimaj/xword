import React, { Component } from 'react';
import Tile from './Tile.js';
import './TileRow.css';

class TileRow extends Component {
  // constructor(props) {
  //   super(props);
  //   const listItems = this.props.numbers.map((number, index) => 
  //     <Tile key={index} onFocus={this.props.onFocus} row={this.props.row} col={index} text={number}></Tile>);
  //   this.state = {list : listItems};
  // }

  render() {
    console.log('rendering with ' + this.props.focusX + this.props.focusY);
      var list =  this.props.numbers.map((number, index) => 
      <Tile key={index} onFocus={this.props.onFocus} focusY={this.props.focusY} focusX={this.props.focusX} row={this.props.row} col={index} text={number}></Tile>);
    return (
      <div className="TileRow">
        {list}
      </div>
    );
  }
}


export default TileRow;