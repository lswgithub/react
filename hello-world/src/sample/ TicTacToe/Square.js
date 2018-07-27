import React, { Component } from 'react';


class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value:null
		};
		/*
		* In JavaScript classes, you need to always call super when defining the constructor of a
		* subclass. All React component classes that have a constructor should start it with a super(props) call
		*/
	}
	render() {
		return (
			<button className="square" onclick={() => this.setState({value:"X"})}>
				{this.state.value}
			</button>
		);
	}
}

export default Square;