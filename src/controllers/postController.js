const postService = require('../services/postService');

const getAllPosts = async (_req, res) => {
  const allPosts = await postService.getAllPosts();
    return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const postById = await postService.getPostById(id);
  
  if (!postById) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
    return res.status(200).json(postById);
};

module.exports = {
  getAllPosts,
  getPostById,
};