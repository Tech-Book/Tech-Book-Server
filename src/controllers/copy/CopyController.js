const Copy = require('../../models/BookCopy');
const Book = require('../../models/Book');

module.exports = {
    async index(req, res) {
        try {
            const copies = await Copy.findAll({
                attributes: ['id'],
                include:
                {
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
                        },
                    ]
                },
            });
            res.json(copies);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async show(req, res) {
        try {
            const { copy_id } = req.params;
            const copy = await Copy.findByPk(copy_id, {
                attributes: ['id'],
                include:
                {
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
                        },
                    ]
                },
            });
            if (!copy) {
                return res.json({ message: 'Copy not found' });
            }
            return res.json(copy);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async store(req, res) {
        try {
            const { book_id } = req.body;
            const book = await Book.findByPk(book_id);
            if (!book) {
                return res.status(400).json({ message: 'Invalid book id' });
            }
            const copy = await Copy.create({ book_id });
            res.json({ copy });
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async destroy(req, res) {
        try {
            const { copy_id } = req.params;
            await Copy.destroy({
                where: {
                    id: copy_id,
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