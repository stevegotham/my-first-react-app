import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { name: 'Killjoy', age: 23 },
      { name: 'Betty', age: 48 },
      { name: 'Al', age: 22 }
    ]
  }
  
  switchNameHandler = () => {
    // DON'T DO THIS-----------> this.state.persons[1].name = 'Veronica';, use this.setStat({})
      this.setState({
        persons: [
          { name: 'Killjoy', age: 28 },
          { name: 'Veronica', age: 48 },
          { name: 'Al', age: 123 }
        ]      
      })
  }
  
  render() {
    return (
      <div className="App">
        <h1>This is my first React app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Person</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I am a hottie!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
