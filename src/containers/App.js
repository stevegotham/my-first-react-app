import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
// import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor()', props);
  }
  
  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }
  
  componentDidlMount() {
    console.log('[App.js] inside componentDidlMount()');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
  }
  
  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidMount()');
  }
  
  state = {
    persons: [
      { id: 'numeroUno', name: 'Killroy', age: 23 },
      { id: 'numeroDos', name: 'Betty', age: 48 },
      { id: 'numeroTres', name: 'Al', age: 22 }
    ],
    showPersons: false
  }
  
  statePersonsCopy = [...this.state.persons]; // used to revert to initial state if all persons are deleted
  
  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons]; // spread operator is used to create a copy of the array
    const personIndex = persons.findIndex(p => p.id === id);
    const person = {...persons[personIndex]}; // spread operator is used to create a copy of the object
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({
      persons: persons 
    });
    // could simply declare persons - es6 allows for single declaration if key and value are same - eg: 
    // this.setState({persons});
    // ||
    // this.setState({
    //   persons
    // });
  }
  
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }
  
  deletePersonHandler = (i) => {
    // CREATE A COPY OF STATE, UPDATE COPY, THEN SETSTATE()
    // const persons = this.state.persons.slice(); // slice is used to create a copy of the array
    const persons = [...this.state.persons]; // spread operator is used to create a copy of the array
    persons.splice(i, 1);
    if (persons.length) {
      this.setState({
        persons: persons
      });
    } else {
      this.setState({
        persons: this.statePersonsCopy,
        showPersons: false
      })
    }
  }
  
  render() {
    
    console.log('[App.js] inside render()');
    // method to conditionally render content to the DOM
    let persons = null;
    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
    }
    
    return (
        <div className={classes.App}>
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
