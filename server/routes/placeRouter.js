const express = require('express')
const router = express.Router()
const placeController =   require('../controllers/placeController');
const projectController =   require('../controllers/projectController');

// Retrieve all employees
router.get('/', placeController.findAll);
// Retrieve a single employee with id
router.get('/:id', placeController.findById);

// Retrieve a single employee with id
router.get('/:id/projects', projectController.findByPlaceId);

module.exports = router