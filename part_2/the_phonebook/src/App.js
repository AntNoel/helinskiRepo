import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import Notification from './Notification';
import PhoneService from './PhoneService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('xxx');
  const [searchName, setSearchName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const editPersonNumber = (id, number) => {
    const personToEdit = persons.find((person) => person.id === id);
    if (!personToEdit) return;
    personToEdit.number = number;
    PhoneService.update(id, personToEdit).then((editedPerson) =>
      setPersons(
        persons.map((person) => (person.id != id ? person : editedPerson))
      )
    );
  };
  const addPerson = (e) => {
    e.preventDefault();
    //Check that the name doesnt already exist in the phonebook
    const personsCopy = [...persons];
    const samePerson = personsCopy.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (samePerson && samePerson.number != newNumber) {
      //Name is already in the phonebook and the number is different
      //Ask to replace the new number with the old
      if (
        window.confirm(
          `${samePerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const personToUpdate = { ...samePerson, number: newNumber };
        PhoneService.update(personToUpdate.id, personToUpdate)
          .then((updatedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id != updatedPerson.id ? person : updatedPerson
              )
            )
          )
          .catch((err) => {
            setErrorMessage({
              type: 'error',
              text: `${personToUpdate} has already been deleted!`,
            });
          });
      }
    } else if (samePerson) {
      //Already exist by name in the phonebook
      alert(`${samePerson} is already added to phonebook`);
    } else {
      //Doesn't exist in the phonebook
      PhoneService.create({
        name: newName,
        number: newNumber,
      }).then((createdPerson) => {
        setErrorMessage({ type: 'success', text: `Added ${newName}` });
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
        setPersons([...persons, createdPerson]);
      });
    }

    setNewName('');
    setNewNumber('');
  };

  const deletePerson = (id, person) => {
    if (window.confirm(`Delete ${person.name} ? `)) {
      PhoneService.remove(id).then((deletedPerson) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  useEffect(() => {
    PhoneService.getAll().then((initialPersons) =>
      setPersons(persons.concat(initialPersons))
    );
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter searchName={searchName} setSearchName={setSearchName} />

      <h2>Add a New</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleAddNote={addPerson}
      />

      <h2>Numbers</h2>

      {persons ? (
        <Persons
          handleDeleteNote={deletePerson}
          searchName={searchName}
          persons={persons}
        />
      ) : (
        '...'
      )}
    </div>
  );
};

export default App;
