import React from 'react';

export const Search = ({ search, setSearch }) => {
  return (
    <div>
      find countries{' '}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
      />
    </div>
  );
};

export default Search;
