import React, { useState, useEffect } from 'react';
import { getCities, createCity, updateCity, deleteCity } from './services/cityService';

function App() {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [cityPopulation, setCityPopulation] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await getCities();
      setCities(cities);
    };
    fetchCities();
  }, []);

  const handleCreateCity = async () => {
    const newCity = await createCity({ name: cityName, population: cityPopulation });
    setCities([...cities, newCity]);
  };

  const handleDeleteCity = async (id) => {
    await deleteCity(id);
    setCities(cities.filter(city => city._id !== id));
  };

  return (
    <div>
      <h1>Find City</h1>
      <input
        type="text"
        placeholder="City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Population"
        value={cityPopulation}
        onChange={(e) => setCityPopulation(e.target.value)}
      />
      <button onClick={handleCreateCity}>Add City</button>
      <ul>
        {cities.map((city) => (
          <li key={city._id}>
            {city.name} - {city.population}
            <button onClick={() => handleDeleteCity(city._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;