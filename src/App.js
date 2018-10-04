import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium'; // package that enables the use of pseudo-selectors -- don't forget to export default Radium(appName) at end of file

class App extends Component {

  
  state = {
    persons: [
      { id: 'numeroUno', name: 'Killroy', age: 23 },
      { id: 'numeroDos', name: 'Betty', age: 48 },
      { id: 'numeroTres', name: 'Al', age: 22 }
    ],
    showPersons: false
  }
  
  statePersonsCopy = [...this.state.persons];
  
  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
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
    // method to use inline styling:
    const styling = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      outline: 'none',
      padding: '8px',
      cursor: 'pointer',
      ':hover': { // must wrap in quotes as value beginning with a colon is not valid js
        opacity: '0.6',
        color: 'yellow' 
      }
    };
    
    let buttonText = this.state.showPersons ? 'Hide' : 'Show';
    
    const classes = [];
    if (this.state.persons.length < 3) classes.push('bold');
    if (this.state.persons.length < 2) classes.push('red');
    
    // method to conditionally render content to the DOM
    let persons = null;
    if (this.state.showPersons) {
      styling.backgroundColor = 'red';
      styling[':hover'] = {
        ...styling[':hover'],
        color: 'blue'
      }
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
              style = {classes.join(' ')} />
            )
          })
        }
        </div>
      );
   }
    
    return (
      <StyleRoot>
        <div className='App'>
          <h1>This is my first React app</h1>
          <button
            style={styling}
            onClick={this.togglePersonsHandler}>{buttonText} Persons Display</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
