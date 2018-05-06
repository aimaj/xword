import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
  }

  edit() {
    console.log('text: ' + this.props.text + ' row: ' + this.props.row + ' col: ' + this.props.col);
    this.props.onFocus(this.props.row, this.props.col);
  }

  render() {
  	if (this.props.text === '0') {
  		return (
  			<div className="BlankTile"></div>
	    );
  	} else {
	    return (
	      <div className="Tile" onClick={this.edit}>{this.props.text}</div>
	    );
    }
  }
}


export default Tile;