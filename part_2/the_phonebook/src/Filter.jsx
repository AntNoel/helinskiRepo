import React from 'react';

export const Filter = ({ setSearchName, searchName }) => {
  return (
    <div>
      Filter shown with{' '}
      <input
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
      />
    </div>
  );
};

export default Filter;
