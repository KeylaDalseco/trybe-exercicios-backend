// src/services/commentsService.js

const { Comment } = require('../models');

const getCommentsByAccountId = async (id) => {
  const listOfComments = await Comment.findAll({
    where: { accountId: id },
  });

  return listOfComments;
};

module.exports = {
  getCommentsByAccountId,
};
