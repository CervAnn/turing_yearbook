import React from 'react';
import './Person.css';

const Person = ({photo, name, title, quote, superlative, deleteStudent, id}) => {
    const isEditable = (title === "Students" ? true : false);
    return (
        <div className="Person">
            <img className="photo" alt="" src={photo}/>
            <h3 contentEditable={isEditable} suppressContentEditableWarning={isEditable}>{name === "" ? "Add Name Here" : name}</h3>
            <p contentEditable={isEditable} suppressContentEditableWarning={isEditable}><em>{quote === "" ? "Add Quote Here" : `"${quote}"`}</em></p>
            <h3 contentEditable={isEditable} suppressContentEditableWarning={isEditable}>{superlative === "" ? "Add Superlative Here" : superlative}</h3>
            <button style={{display: isEditable ? "block" : "none"}} onClick={(e) => deleteStudent(id)}>Remove Student</button>
        </div>
    )
}


export default Person;