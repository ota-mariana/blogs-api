const { Router } = require('express');
const userController = require('../controllers/userController');
const validadeLogin = require('../middlewares/validadeLogin');

const router = Router();

router.post('/', validadeLogin, userController.getUserByLogin);

module.exports = router;