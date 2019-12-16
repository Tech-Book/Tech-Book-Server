const Book = require('../../models/Book');
const Author = require('../../models/Author');
const Genre = require('../../models/Genre');
const Publisher = require('../../models/Publisher');

module.exports = {
  async index(req, res) {
    const books = await Book.findAll(
      {
        attributes: ['title', 'release_date', 'id'],
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
          },
        ]
      }
    );
    return res.json(books);
  },

  async show(req, res) {
    const { book_id } = req.params;
    if (!book_id) {
      res.status(400).json({ message: 'Invalid Book id' });
    }
    const book = await Book.findByPk(book_id,
      {
        attributes: ['title', 'release_date', 'id'],
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
          },
        ]
      }
    );
    if (!book) {
      return res.status(400).json({ message: 'Book not found' });
    }
    res.json(book);
  },

  async store(req, res) {
    const { author_id, genre_id, publisher_id, release_date, title } = req.body;

    const author = await Author.findByPk(author_id);
    if (!author) {
      return res.status(400).json({ message: 'Invalid Author' });
    }
    const publisher = await Publisher.findByPk(publisher_id);
    if (!publisher) {
      return res.status(400).json({ message: 'Invalid Publisher' });
    }
    const genre = await Genre.findByPk(genre_id);
    if (!genre) {
      return res.status(400).json({ message: 'Invalid Genre' });
    }
    const book = await Book.create({ author_id, genre_id, publisher_id, release_date, title });
    res.json(book);
  },

  async update(req, res) {
    const { book_id } = req.params;
    const { author_id, genre_id, publisher_id, release_date, title } = req.body;
    await Book.update({ author_id, genre_id, publisher_id, release_date, title }, {
      where: {
        id: book_id,
      }
    });
    return res.send();
  },

  async destroy(req, res) {
    const { book_id } = req.params;
    await Book.destroy({
      where: {
        id: book_id,
      }
    });

    return res.send();
  },
}
