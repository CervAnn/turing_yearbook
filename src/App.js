import React, { Component } from 'react';
import Cohort from './Cohort';
import people from './data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      // students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <Cohort title='Staff' people={this.state.staff} />
      </div>
    );
  }
}

// <Cohort title='1903' people={this.state.students} />
export default App;
