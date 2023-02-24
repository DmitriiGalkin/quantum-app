const express = require('express')
const router = express.Router()
const meetController =   require('../controllers/meetController');
// Retrieve all employees
router.get('/', meetController.findAll);
// Retrieve a single employee with id
router.get('/:id', meetController.findById);
module.exports = router