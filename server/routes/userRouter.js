const express = require('express')
const router = express.Router()
const userController =   require('../controllers/userController');
const projectController =   require('../controllers/projectController');
const meetController =   require('../controllers/meetController');


router.get('/', userController.findAll);
router.post('/', userController.create);
router.post('/login', userController.islogin);
router.get('/:id', userController.findById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

router.get('/:id/unique', userController.findUniquesById);
router.get('/:id/project', projectController.findByUserId);

router.get('/:id/allMeet', meetController.findAllByUserId);

module.exports = router