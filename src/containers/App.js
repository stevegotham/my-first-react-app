import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';

class App extends Component {

  
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
    
    let btnText = this.state.showPersons ? 'Hide' : 'Show';
    let btnClass = '';
    
    const classesCollection = [];
    if (this.state.persons.length < 3) classesCollection.push(classes.bold);
    if (this.state.persons.length < 2) classesCollection.push(classes.red);
    
    // method to conditionally render content to the DOM
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        {
          this.state.persons.map((person, i) => {
            return (
              <Person
                key = {person.id}
                click = {() => this.deletePersonHandler(i)}
                name = {person.name}
                age = {person.age}
                changed = {(event) => this.nameChangeHandler(event, person.id)}
                style = {classesCollection.join(' ')} />
            )
          })
        }
        </div>
      );
      btnClass = classes.red;
   }
    
    return (
        <div className={classes.App}>
          <h1>This is my first React app</h1>
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>{btnText} Persons Display</button>
          {persons}
        </div>
    );
  }
}

export default App;
