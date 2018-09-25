import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  
  state = {
    persons: [
      { name: 'Killroy', age: 23 },
      { name: 'Betty', age: 48 },
      { name: 'Al', age: 22 }
    ]
  }
  
  switchNameHandler = (newName) => {
    // DON'T DO THIS, use this.setState() ---------> this.state.persons[1].name = 'Veronica';
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
          onClick={() => this.switchNameHandler('Killroy')}>Switch Person</button> {/* this is not the preferred method as there can be unintended consequences. Use method below when you can. */}
        <Person
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age} 
          click = {this.switchNameHandler.bind(this, 'Mr Roboto')} /> {/* this is the preferred method of updating state from outside the Component */}
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>I am a hottie!</Person>
        <Person
          name = {this.state.persons[2].name}
          age = {this.state.persons[2].age} 
          changed = {this.nameChangeHandler}/>
      </div>
    );
  }
}

export default App;
