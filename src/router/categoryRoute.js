const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const { validateNameCategory } = require('../middlewares/validateCategory');
const { validateToken } = require('../middlewares/validateUser');

const router = Router();

router.post('/', validateToken, validateNameCategory, categoryController.addNewCategory);
router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;