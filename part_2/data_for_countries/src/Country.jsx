import React from 'react';
import Weather from './Weather';
export const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital {country.capital}</p>
      <p>Population {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((language, i) => (
          <li key={i}>{language.name}</li>
        ))}
      </ul>
      <img style={{ width: '150px', height: '150px' }} src={country.flag} />
      <Weather capital={country.capital} />
    </div>
  );
};

export default Country;
