const { Router } = require('express');
const userController = require('../controllers/userController');
const { validateUserToken } = require('../middlewares/validateUserToken');

const router = Router();

router.get('/', validateUserToken, userController.getAllUsers);
router.get('/:id', validateUserToken, userController.getUserById);

module.exports = router;