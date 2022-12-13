const { Router } = require('express');
const userController = require('../controllers/userController');
const { validateToken, validateDataUser } = require('../middlewares/validateUser');

const router = Router();

router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getUserById);
router.post('/', validateDataUser, userController.addNewUser);

module.exports = router;