import React from 'react'
import Person from './Person'
import StudentForm from './StudentForm'
import './Cohort.css'

const Cohort = (props) => {
    const allPeople = props.people.map(member => {
        return (
            <Person
            key={`${member.id}_${Date.now()}`}
            id={member.id}
            photo={member.photo}
            name={member.name}
            quote={member.quote}
            superlative={member.superlative}
            title={props.title}
            deleteStudent={props.deleteStudent}
            />
        )
    })
    return (
        <div className="Cohort">
            <h1>{props.title}</h1>
            <article style={{display: props.title === "Students" ? "block" : "none"}}>
            <StudentForm addStudent={props.addStudent}/>
            </article>
            {allPeople}
        </div>
    )
}

export default Cohort;
