import React, { Component } from 'react';

class Game extends Component {
	
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
			</div>
			<div className="game-info">
				<div>{/* status */}</div>
				<ol>{/* TODO */</ol>
			</div>
					
		);
	}
}
					
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);