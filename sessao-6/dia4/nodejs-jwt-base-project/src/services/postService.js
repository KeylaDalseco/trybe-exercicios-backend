const { Post } = require('../models');

const getPosts = async (request) => {
  if (request.user) {
    return Post.findAll({ 
      where: { userId: request.user.id },
      attributes: { exclude: 'id' },
    });
  }

  return Post.findAll({
    attributes: { exclude: 'id' },
  });
};

module.exports = {
  getPosts,
};
