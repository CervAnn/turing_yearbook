import React from 'react'
import Person from './Person'
import './Cohort.css'

const Cohort = (props) => {
    const allPeople = props.people.map(member => {
        return (
            <Person
            key={member.id}
            id={member.id}
            photo={member.photo}
            name={member.name}
            quote={member.quote}
            superlative={member.superlative}
            />
        )
    })

    return (
        <div className="Cohort">
            <h1>{props.title}</h1>
            {allPeople}
        </div>
    )
}

export default Cohort;
