import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <img className="photo" src={props.photo}/>
            <h3>{props.name}</h3>
            <p><em>{props.quote}</em></p>
            <h3>{props.superlative}</h3>
        </div>
    )
}


export default Person;
