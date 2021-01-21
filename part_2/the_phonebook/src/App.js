import React, { useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('xxx');
  const [searchName, setSearchName] = useState('');
  const handleAddNote = (e) => {
    e.preventDefault();
    //Check that the name doesnt already exist in the phonebook
    const personsLowerCase = [...persons].map((person) =>
      person.name.toLowerCase()
    );
    if (personsLowerCase.includes(newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} setSearchName={setSearchName} />

      <h2>Add a New</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleAddNote={handleAddNote}
      />

      <h2>Numbers</h2>

      {persons ? <Persons searchName={searchName} persons={persons} /> : '...'}
    </div>
  );
};

export default App;
