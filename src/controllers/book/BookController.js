const Book = require('../../models/Book');
const Author = require('../../models/Author');
const Genre = require('../../models/Genre');
const Publisher = require('../../models/Publisher');

module.exports = {
    async index(req, res) {
        try {
            const books = await Book.findAll(
                {
                    attributes: ['title', 'createdAt', 'updatedAt', 'release_date', 'id'],
                    include: [
                        { association: 'publisher' },
                        { association: 'genre' },
                        { association: 'author' },
                    ]
                }
            );

            return res.json(books);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async show(req, res) {
        try {
            const { book_id } = req.params;
            if (!book_id) {
                res.status(400).json({ message: 'Invalid Book id' });
            }
            const book = await Book.findByPk(book_id,
                {
                    attributes: ['title', 'createdAt', 'updatedAt', 'release_date', 'id'],
                    include: [
                        { association: 'publisher' },
                        { association: 'genre' },
                        { association: 'author' },
                    ]
                }
            );
            if(!book){
                return res.status(400).json({message: 'Book not found'});
            }
            res.json(book);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async store(req, res) {
        try {
            const { author_id, genre_id, publisher_id, release_date, title } = req.body;
            if (!title) {
                return res.status(400).json({ message: 'Invalid title' })
            }
            if (!release_date) {
                return res.status(400).json({ message: 'Invalid release date' })
            }
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
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async update(req, res) {
        try {
            const { book_id } = req.params;
            const { author_id, genre_id, publisher_id, release_date, title } = req.body;
            if (!book_id) {
                res.status(400).json({ message: 'Invalid Book id' });
            }
            await Book.update({ author_id, genre_id, publisher_id, release_date, title }, {
                where: {
                    id: book_id,
                }
            });
            return res.send();
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async destroy(req, res) {
        try {
            const { book_id } = req.params;
            if (!book_id) {
                res.status(400).json({ message: 'Invalid Book id' });
            }
            await Book.destroy({
                where: {
                    id: book_id,
                }
            });

            return res.send();
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },
}