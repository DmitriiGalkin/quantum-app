const express = require('express')
const router = express.Router()
const placeController =   require('../controllers/placeController');
// Retrieve all employees
router.get('/', placeController.findAll);
// Retrieve a single employee with id
router.get('/:id', placeController.findById);
module.exports = router