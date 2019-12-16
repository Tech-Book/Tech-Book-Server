const Copy = require('../../models/BookCopy');
const Book = require('../../models/Book');

module.exports = {
  async index(req, res) {
    const copies = await Copy.findAll({
      attributes: ['id'],
      include: {
        association: 'book',
        attributes: ['id', 'title', 'release_date'],
        include: [
          {
            attributes: ['id', 'name'],
            association: 'publisher'
          },
          {
            attributes: ['id', 'name'],
            association: 'genre'
          },
          {
            attributes: ['id', 'name'],
            association: 'author'
          }
        ]
      }
    });
    res.json(copies);
  },

  async show(req, res) {
    const { copy_id } = req.params;
    const copy = await Copy.findByPk(copy_id, {
      attributes: ['id'],
      include: {
        association: 'book',
        attributes: ['id', 'title', 'release_date'],
        include: [
          {
            attributes: ['id', 'name'],
            association: 'publisher'
          },
          {
            attributes: ['id', 'name'],
            association: 'genre'
          },
          {
            attributes: ['id', 'name'],
            association: 'author'
          }
        ]
      }
    });
    if (!copy) {
      return res.json({ message: 'Copy not found' });
    }
    return res.json(copy);
  },

  async store(req, res) {
    const { book_id } = req.body;
    const book = await Book.findByPk(book_id);
    if (!book) {
      return res.status(400).json({ message: 'Invalid book id' });
    }
    const copy = await Copy.create({ book_id });
    res.json({ copy });
  },

  async destroy(req, res) {
    const { copy_id } = req.params;
    await Copy.destroy({
      where: {
        id: copy_id
      }
    });
    return res.send();
  }
};
