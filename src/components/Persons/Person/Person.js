import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor()', props);
  }
  
  componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
  }
  
  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
  }
	
	state = {
		
	}
	
	render() {
    
    console.log('[Person.js] inside render()');
		return (
			<div className={classes.Person}>
				<p onClick={this.props.click} className={this.props.style}>My name is {this.props.name} and I am {this.props.age} years old!</p>
				<input type="text" onChange={this.props.changed} defaultValue={this.props.name} />
			</div>
		)
	}
}

export default Person;