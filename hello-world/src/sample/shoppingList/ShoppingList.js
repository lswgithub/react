import React, { Component } from 'react';

class ShoppingList extends Component {
	// render() {
	// 	return (
	// 		<div className="shopping-list">
	// 			<h1>Shopping List for {this.props.name}</h1>
	// 		</div>	
	// 	);
	// }
	render() {
	return	React.createElement("div",{className:"shpping-list"},
				React.createElement("h1",null,"Shopping LIst for ", props.name),
				React.createElement("ul",null,
					React.createElement("li",null,"iphone"),
					React.createElement("li",null,"ipad"),
					React.createElement("li",null,"galaxy note"),
					React.createElement("li",null,"Mac Book")
				)
		);
	}
	
}