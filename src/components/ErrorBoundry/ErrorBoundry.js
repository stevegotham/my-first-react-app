import React, { Component } from 'react';

class ErrorBoundry extends Component {
	
	state = {
		hasError: false,
		errorMessage: ''
	}
	
	componentDidCatch = (error, info) => {
		this.setState({
			hasError: true,
			errorMessage: error
		});
	}
	
	checkedComponent = this.state.errorMessage ? <h1>{this.state.errorMessage}</h1> : this.props.children;
	
	render() {
		return this.checkedComponent;
	}
}

export default ErrorBoundry;