const express = require('express');
const { getCities, createCity, updateCity, deleteCity } = require('../controllers/cityController');

const router = express.Router();

router.get('/', getCities);
router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

module.exports = router;