import React, { Component } from 'react'
import Cohort from './Cohort'
import StudentForm from './StudentForm'
import people from '../data/yearbook-data.js'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state={
      staff: people.staff,
      students: people.students
    }
  }
  addStudent = (newStudent) => {
    this.setState({staff: people.staff, students: [...this.state.students, newStudent]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <Cohort people={this.state.staff} title="Staff"/>
        <StudentForm addStudent={this.addStudent} />
        <Cohort people={this.state.students} title="Students"/>
      </div>
    );
  }
}

export default App;