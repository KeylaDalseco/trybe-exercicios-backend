const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });
  return books;
};

const getAuthors = async () => {
  const authors = await Book.findAll({
    attributes: ['author'],
    order: [['title', 'ASC']],
  });
  return authors;
};

const getById = async (id) => {
  const bookById = Book.findByPk(id);
  return bookById;
};

const create = async (title, author, pageQuantity, publisher ) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });
  return book;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
      publisher
    },
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy(
    { where: { id } },
  );

  return removed;
};

module.exports = { getAll, getById, create, update, remove, getAuthors };

