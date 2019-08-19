import React from 'react';
import './Person.css';

const Person = (props) => {
    const isEditable = (props.title === "Students" ? true : false);
    return (
        <div className="Person">
            <img className="photo" alt="" src={props.photo}/>
            <h3 contentEditable={isEditable}>{props.name === "" ? "Add Name Here" : props.name}</h3>
            <p contentEditable={isEditable}><em>{props.quote === "" ? "Add Quote Here" : props.quote}</em></p>
            <h3 contentEditable={isEditable}>{props.superlative === "" ? "Add Superlative Here" : props.superlative}</h3>
            <button style={{display: isEditable ? "block" : "none"}}>Remove Student</button>
        </div>
    )
}


export default Person;