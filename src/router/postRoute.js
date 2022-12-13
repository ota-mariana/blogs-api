const { Router } = require('express');
const postController = require('../controllers/postController');
const { validateToken } = require('../middlewares/validateUser');

const router = Router();

router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getPostById);

module.exports = router;