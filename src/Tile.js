import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
  render() {
    return (
      <div className="Tile">{this.props.text}</div>
    );
  }
}


export default Tile;