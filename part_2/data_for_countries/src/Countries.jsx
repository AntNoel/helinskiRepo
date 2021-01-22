import React, { useState } from 'react';
import Country from './Country';
export const Countries = ({ filteredCountries }) => {
  const [countriesToDisplay, setCountriesToDisplay] = useState([]);
  const shouldCountryShow = (country) => {
    if (!country) return;

    if (countriesToDisplay.includes(country))
      return <Country country={country} />;
  };
  return (
    <div>
      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : filteredCountries.length <= 10 ? (
        filteredCountries.map((country, i) => (
          <p key={i}>
            {country.name}
            <button
              onClick={() =>
                setCountriesToDisplay([...countriesToDisplay, country])
              }
            >
              Show
            </button>
            {shouldCountryShow(country)}
          </p>
        ))
      ) : (
        'Too many matches, specify another filter'
      )}
    </div>
  );
};

export default Countries;
