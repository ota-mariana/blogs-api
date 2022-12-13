const postService = require('../services/postService');

const getAllPosts = async (_req, res) => {
  const allPosts = await postService.getAllPosts();
    return res.status(200).json(allPosts);
};

module.exports = {
  getAllPosts,
};