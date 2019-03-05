import * as React from 'react';

export default class ClickerCounterClass extends React.PureComponent {
	state = { count: 0 };

	componentDidMount() { this.updateTitle(); }

	componentDidUpdate() { this.updateTitle(); }

	updateTitle() {
		document.title = `Clicked ${this.state.count} times(s)`;
	}

	handleClick = () => {
		const count = this.state.count;
		this.setState({ count: count + 1 });
	}

	render() {
		return [
			<div key="first">
				Clicked: {this.state.count} time(s).
			</div>,
			<div key="second">
				<button type="button" onClick={this.handleClick}>
					Click to increment the counter!
				</button>
			</div>,
		];
	}
}
