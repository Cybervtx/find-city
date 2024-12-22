const API_URL = 'http://localhost:5000/api/cities';

export const getCities = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const createCity = async (city) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(city),
  });
  return await response.json();
};

export const updateCity = async (id, city) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(city),
  });
  return await response.json();
};

export const deleteCity = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};