import React from 'react';
import './Person.css';

const Person = (props) => {
    const isEditable = (props.title === "Students" ? true : false);
    return (
        <div className="Person">
            <img className="photo" alt="" src={props.photo}/>
            <h3 contentEditable={isEditable}>{props.name}</h3>
            <p contentEditable={isEditable}><em>{props.quote}</em></p>
            <h3 contentEditable={isEditable}>{props.superlative}</h3>
        </div>
    )
}


export default Person;
