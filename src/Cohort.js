import React from 'react';
import Card from './Card';
import './Cohort.css';

function Cohort({ title, people }) {
  const individuals = people.map((person, id) => {
    return (
      <Card {...person} key={`${id}${Date.now()}`} />
    )
  });

  return (
    <article className='cohort'>
      <h2>{title}</h2>
      <section className='cohort-grid'>
        {individuals}
      </section>
    </article>
  )
}

export default Cohort;
