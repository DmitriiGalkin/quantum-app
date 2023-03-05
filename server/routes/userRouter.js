const express = require('express')
const router = express.Router()
const userController =   require('../controllers/userController');
const projectController =   require('../controllers/projectController');

router.get('/', userController.findAll);
router.post('/', userController.create);
router.get('/:id', userController.findById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

router.get('/:id/uniques', userController.findUniquesById);
router.get('/:id/projects', projectController.findByUserId);

module.exports = router