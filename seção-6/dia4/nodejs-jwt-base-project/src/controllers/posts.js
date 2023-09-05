const { PostService } = require('../services');

module.exports = async (req, res) => {
  console.log(req.user.dataValues);
  const posts = await PostService.getPosts(req);
  res.status(200).json({ mockPosts: posts });
};
