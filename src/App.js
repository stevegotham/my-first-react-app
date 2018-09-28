import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  
  state = {
    persons: [
      { id: 'numeroUno', name: 'Killroy', age: 23 },
      { id: 'numeroDos', name: 'Betty', age: 48 },
      { id: 'numeroTres', name: 'Al', age: 22 }
    ],
    showPersons: true
  }
  
  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(p => p.id === id);
    const person = {...persons[personIndex]}; // spread operator is used to create a copy of the object
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
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
    this.setState({
      persons: persons
    });
  }
  
  render() {
    // method to use inline styling:
    const styling = {
      backgroundColor: 'lightgray',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
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
              changed = {(event) => this.nameChangeHandler(event, person.id)} />
            )
          })
        }
        </div>
      );
   }
    
    return (
      <div className="App">
        <h1>This is my first React app</h1>
        <button
          style={styling}
          onClick={this.togglePersonsHandler}>Toggle Persons Display</button>
        {persons}
      </div>
    );
  }
}

export default App;
