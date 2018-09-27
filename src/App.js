import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  
  state = {
    persons: [
      { name: 'Killroy', age: 23 },
      { name: 'Betty', age: 48 },
      { name: 'Al', age: 22 }
    ],
    showPersons: true
  }
  
  switchNameHandler = (newName) => {
    // DON'T DO THIS: ---------> this.state.persons[0].name = newName;  ---> use this.setState() instead
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Veronica', age: 48 },
        { name: 'Al', age: 123 }
      ]
    })
  }
  
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Killroy', age: 28 },
        { name: 'Betty', age: 48 },
        { name: event.target.value, age: 123 }
      ]      
    })
  }
  
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  
  render() {
    
    const styling = {
      backgroundColor: 'lightgray',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>This is my first React app</h1>
        <p>This is really working!</p>
        <button
          style={styling}
          onClick={this.togglePersonsHandler}>Toggle Persons Display</button>
        { this.state.showPersons === true ? 
          <div>
            <Person
            name = {this.state.persons[0].name}
            age = {this.state.persons[0].age} 
            click = {this.switchNameHandler.bind(this, 'Mr Roboto')} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}>I am a hottie!</Person>
            <Person
              name = {this.state.persons[2].name}
              age = {this.state.persons[2].age} 
              changed = {this.nameChangeHandler}/>
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
