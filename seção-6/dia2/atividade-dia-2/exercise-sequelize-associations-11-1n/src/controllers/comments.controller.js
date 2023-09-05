// src/controllers/commentsController.js

const service = require('../services/comment.service');

const getCommentsByAccountId = async (req, res) => {
  try {
    const { id } = req.params;
    const listOfComments = await service.getCommentsByAccountId(Number(id));

    if (!listOfComments.length) {
      return res.status(404).json({ message: 'Nenhum comentário cadastrado' });
    }

    return res.status(200).json(listOfComments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getCommentsByAccountId,
};
