import React, { Component } from 'react'
import './StudentForm.css'

class StudentForm extends Component {
    constructor() {
        super();
        this.state={
            name: "",
            quote: "",
            superlative: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newStudent = {
            id: Date.now(),
            photo: './college_dropout_logo.jpg',
            ...this.state
        }
        this.props.addStudent(newStudent);
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({name:"", quote:"", superlative:""})
    }

    render() {
        return (
            <form className="StudentForm">
                <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" placeholder="Quote" name="quote" value={this.state.quote} onChange={this.handleChange}/>
                <input type="text" placeholder="Most Likey to..." name="superlative" value={this.state.superlative} onChange={this.handleChange}/>
                <button className="formButton" onClick={e => this.handleSubmit(e)}>Add Student</button>
            </form>
        )
    }
}

export default StudentForm;