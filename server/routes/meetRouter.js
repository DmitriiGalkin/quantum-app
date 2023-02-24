const express = require('express')
const router = express.Router()
const meetController =   require('../controllers/meetController');
const userController =   require('../controllers/userController');

router.get('/', meetController.findAll); // Встречи
router.get('/:id', meetController.findById); // Встреча
router.get('/:id/users', userController.findByMeetId); // Участники встречи

module.exports = router