import React from 'react';
export const Persons = ({ searchName, persons, handleDeleteNote }) => {
  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(searchName))
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}{' '}
            <button onClick={() => handleDeleteNote(person.id, person)}>
              delete
            </button>
          </p>
        ))}
    </>
  );
};

export default Persons;
