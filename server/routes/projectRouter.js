const express = require('express')
const router = express.Router()
const projectController =   require('../controllers/projectController');
const userController =   require('../controllers/userController');
const meetController =   require('../controllers/meetController');

// Retrieve all employees
router.get('/', projectController.findAll);
// Retrieve a single employee with id
router.get('/:id', projectController.findById);

router.get('/:id/users', userController.findByProjectId); // Участники проекта
router.get('/:id/meets', meetController.findByProjectId); // Встречи проекта

module.exports = router