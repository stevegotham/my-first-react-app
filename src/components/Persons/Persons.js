import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log('[Persons.js] inside constructor()', props);
  }
  
  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount()');
  }
  
  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount()');
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps()', nextProps);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
    return nextProps.persons !== Person.persons;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate()', nextProps, nextState);
  }
	
  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidMount()');
  }
  
	state = {
		
	}
	
	render () {
    
    console.log('[Persons.js] inside render()');
		return (
			this.props.persons.map((person, i) => {
				return 	<Person
					key = {person.id}
					click = {() => this.props.clicked(i)}
					name = {person.name}
					age = {person.age}
					changed = {(event) => this.props.changed(event, person.id)} />
			})
		)
	}
}

export default Persons;