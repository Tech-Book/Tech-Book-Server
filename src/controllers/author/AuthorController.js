const Author = require('../../models/Author');

module.exports = {
    async index(req, res) {
        const author = await Author.findAll();
        res.json(author);
    },

    async show(req, res) {
        const { author_id } = req.params;
        const author = await Author.findByPk(author_id);
        if (!author) {
            return res.status(400).json({ message: 'Author not found' });
        }
        res.json(author);
    },

    async store(req, res) {
        const { name } = req.body;
        const author = await Author.create({ name });
        return res.json(author);
    },

    async update(req, res) {
        const { author_id } = req.params;
        const { name } = req.body;
        await Author.update({ name }, {
            where: {
                id: author_id
            }
        });
        res.send();
    },

    async destroy(req, res) {
        const { author_id } = req.params;
        await Author.destroy({
            where: {
                id: author_id,
            }
        });
        return res.send();
    },
}