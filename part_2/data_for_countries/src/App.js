import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './Search';
import Countries from './Countries';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const endpoint = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    axios.get(endpoint).then((response) => {
      const allCountries = response.data;
      setCountries(countries.concat(allCountries));
    });
  }, []);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />

      <Countries
        filteredCountries={countries.filter((country) =>
          country.name.toLowerCase().includes(search)
        )}
      />
    </div>
  );
};

export default App;
