const City = require('../models/cityModel');

const getCities = async (req, res) => {
  const cities = await City.find();
  res.json(cities);
};

const createCity = async (req, res) => {
  const newCity = new City(req.body);
  await newCity.save();
  res.json(newCity);
};

const updateCity = async (req, res) => {
  const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(city);
};

const deleteCity = async (req, res) => {
  await City.findByIdAndDelete(req.params.id);
  res.json({ message: 'City deleted' });
};

module.exports = { getCities, createCity, updateCity, deleteCity };