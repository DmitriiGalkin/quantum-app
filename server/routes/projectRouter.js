const express = require('express')
const router = express.Router()
const projectController =   require('../controllers/projectController');
const userController =   require('../controllers/userController');
const meetController =   require('../controllers/meetController');

router.get('/', projectController.findAll);
router.get('/:id', projectController.findById); // Retrieve a single employee with id
router.post('/', projectController.create); // Create a new employee

router.get('/:id/users', userController.findByProjectId); // Участники проекта
router.get('/:id/meets', meetController.findByProjectId); // Встречи проекта

router.post('/:projectId/user/:userId', projectController.createProjectUser );
router.delete('/:projectId/user/:userId', projectController.deleteProjectUser );

module.exports = router