const express = require('express')
const router = express.Router()
const mainController =   require('../controllers/mainController');

router.get('/meets', mainController.getMeets); // Встречи пользователя
router.get('/projects', mainController.getProjects); // Выгрузить все по пользователю

module.exports = router