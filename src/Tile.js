import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
  }

  edit() {
    console.log('text: ' + this.props.text + ' row: ' + this.props.row + ' col: ' + this.props.col);
    this.props.onFocus(this.props.col, this.props.row);
  }

  render() {
  	if (this.props.text === '0') {
  		return (
  			<div className="BlankTile"></div>
	    );
  	} else {
  		console.log('focusX is ' + this.props.focusX + 'row is ' + this.props.row + this.props.direction);
  		if (this.props.focusX === this.props.col && this.props.focusY === this.props.row) {
		    return (
		      <div className="SelectedTile" onClick={this.edit}>{this.props.text}</div>
		    );  			
  		} else {
  			if (this.props.direction === 0 && this.props.focusX === this.props.col) {
  				console.log('making highlighted tile');
			    return (
			      <div className="HighlightedTile" onClick={this.edit}>{this.props.text}</div>
			    );
  			} else {
  				if (this.props.direction === 1 && this.props.focusY === this.props.row) {
				    return (
				      <div className="HighlightedTile" onClick={this.edit}>{this.props.text}</div>
				    );  
  				} else {
				    return (
				      <div className="Tile" onClick={this.edit}>{this.props.text}</div>
				    );  	  					
  				}
  			}		
  		}
    }
  }
}


export default Tile;