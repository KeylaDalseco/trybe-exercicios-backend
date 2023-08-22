const BooksService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books;

    if (author) {
      books = await BooksService.getAuthors(author);
    }
    books = await BooksService.getAll();

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erroaswwswsw' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await BooksService.getById(Number(id));
    if (!books) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await BooksService.create(title, author, pageQuantity, publisher);

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const updatedUser = await BooksService.update(Number(id), { title, author, pageQuantity, publisher });

  if (!updatedUser) return res.status(404).json({ message: 'Book not found' });

  res.status(201).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BooksService.remove(Number(id));

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
};

module.exports = { getAll, getById, create, update, remove }