const Author = require('../../models/Author');

module.exports = {
    async index(req, res) {

    },

    async show(req, res) {

    },

    async store(req, res) {
        const { name } = req.body;
        const author = await Author.create({ name });
        return res.json(author);
    },

    async update(req, res) {

    },

    async destroy(req, res) {

    },
}