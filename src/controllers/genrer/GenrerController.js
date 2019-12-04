const Genre = require('../../models/Genre');

module.exports = {
    async index(req, res) {
        try {
            const genrer = await Genre.findAll();
            res.json(genrer);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            })
        }
    },

    async show(req, res) {
        try {
            const { genre_id } = req.params;
            const genrer = await Genre.findByPk(genre_id);

            if (!genrer) {
                return res.status(400).json({ message: 'Genre not found' });
            }

            res.json(genrer);
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
            const genrer = await Genre.create({ name });
            return res.json(genrer);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            })
        }
    },

    async update(req, res) {
        try {
            const { genre_id } = req.params;
            const { name } = req.body;
            const genrer = await Genre.findByPk(genre_id);

            if (!name) {
                return res.status(400).json({ message: 'Invalid name' });
            }
            if (!genrer) {
                return res.status(400).json({ message: 'Genre not found' });
            }

            await Genre.update({ name }, {
                where: {
                    id: genre_id
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
            const { genre_id } = req.params;
            await Genre.destroy({
                where: {
                    id: genre_id,
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