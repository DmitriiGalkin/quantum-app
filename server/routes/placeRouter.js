const express = require('express')
const router = express.Router()
const placeController =   require('../controllers/placeController');
const projectController =   require('../controllers/projectController');

router.get('/', placeController.findAll);
router.get('/:id', placeController.findById);
router.post('/', placeController.create);


// Retrieve a single employee with id
router.get('/:id/project', projectController.findByPlaceId);

module.exports = router