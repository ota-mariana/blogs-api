const { Router } = require('express');
const userController = require('../controllers/userController');
const { validateUserToken, validateDataUser } = require('../middlewares/validateUser');

const router = Router();

router.get('/', validateUserToken, userController.getAllUsers);
router.get('/:id', validateUserToken, userController.getUserById);
router.post('/', validateDataUser, userController.addNewUser);

module.exports = router;