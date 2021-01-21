import React from 'react';

export const Persons = ({ searchName, persons }) => {
  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(searchName))
        .map((person, i) => (
          <p key={i}>
            {person.name} {person.number}
          </p>
        ))}
    </>
  );
};

export default Persons;
