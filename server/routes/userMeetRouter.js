const express = require('express')
const router = express.Router()
const userMeetController =   require('../controllers/userMeetController');

router.post('/:userId/:meetId', userMeetController.create); // Create a new employee
router.delete('/:userId/:meetId', userMeetController.delete); // Delete a employee with id

module.exports = router