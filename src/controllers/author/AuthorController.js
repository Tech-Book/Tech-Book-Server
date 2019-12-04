const Author = require('../../models/Author');

module.exports = {
    async index(req, res) {
        try {
            const author = await Author.findAll();
            res.json(author);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            })
        }
    },

    async show(req, res) {
        try {
            const { author_id } = req.params;
            const author = await Author.findByPk(author_id);

            if (!author) {
                return res.status(400).json({ message: 'Author not found' });
            }

            res.json(author);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            })
        }
    },

    async store(req, res) {
        try {
            const { name } = req.body;
            const author = await Author.create({ name });
            return res.json(author);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            })
        }
    },

    async update(req, res) {
        try {
            const { author_id } = req.params;
            const { name } = req.body;
            const author = await Author.findByPk(author_id);

            if (!name) {
                return res.status(400).json({ message: 'Invalid name' });
            }
            if (!author) {
                return res.status(400).json({ message: 'Author not found' });
            }

            await Author.update({ name }, {
                where: {
                    id: author_id
                }
            });

            res.send();
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            })
        }
    },

    async destroy(req, res) {
        try {
            const { author_id } = req.params;
            await Author.destroy({
                where: {
                    id: author_id,
                }
            });

            return res.send();
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            })
        }
    },
}