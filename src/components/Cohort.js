import React from 'react'
import Person from './Person'
import './Cohort.css'

const Cohort = (props) => {
    const allStaff = props.staff.map(member => {
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
            <h1>Staff</h1>
            {allStaff}
        </div>
    )
}

export default Cohort;
