import React from 'react';

export const PersonForm = ({
  handleAddNote,
  setNewName,
  setNewNumber,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handleAddNote}>
      <div>
        name:{' '}
        <input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          required
        />
      </div>
      <div>
        number:{' '}
        <input
          type='tel'
          onChange={(e) => setNewNumber(e.target.value)}
          value={newNumber}
          required
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
