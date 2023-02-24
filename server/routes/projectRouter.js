const express = require('express')
const router = express.Router()
const projectController =   require('../controllers/projectController');
// Retrieve all employees
router.get('/', projectController.findAll);
// Retrieve a single employee with id
router.get('/:id', projectController.findById);
module.exports = router