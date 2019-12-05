const Publisher = require('../../models/Publisher');

module.exports = {
    async index(req, res) {
        try {
            const publisher = await Publisher.findAll();
            res.json(publisher);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async show(req, res) {
        try {
            const { publisher_id } = req.params;
            const publisher = await Publisher.findByPk(publisher_id);

            if (!publisher) {
                return res.status(400).json({ message: 'Publisher not found' });
            }

            res.json(publisher);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async store(req, res) {
        try {
            const { name } = req.body;
            const publisher = await Publisher.create({ name });
            return res.json(publisher);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async update(req, res) {
        try {
            const { publisher_id } = req.params;
            const { name } = req.body;
            const publisher = await Publisher.findByPk(publisher_id);

            if (!name) {
                return res.status(400).json({ message: 'Invalid name' });
            }
            if (!publisher) {
                return res.status(400).json({ message: 'Publisher not found' });
            }

            await Publisher.update({ name }, {
                where: {
                    id: publisher_id
                }
            });

            res.send();
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async destroy(req, res) {
        try {
            const { publisher_id } = req.params;
            await Publisher.destroy({
                where: {
                    id: publisher_id,
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