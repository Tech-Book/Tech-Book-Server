const Genre = require('../../models/Genre');

module.exports = {
  async index(req, res) {
    const genre = await Genre.findAll();
    res.json(genre);
  },

  async show(req, res) {
    const { genre_id } = req.params;
    const genre = await Genre.findByPk(genre_id);
    if (!genre) {
      return res.status(400).json({ message: 'Genre not found' });
    }
    res.json(genre);
  },

  async store(req, res) {
    const { name } = req.body;
    const genre = await Genre.create({ name });
    return res.json(genre);
  },

  async update(req, res) {
    const { genre_id } = req.params;
    const { name } = req.body;
    await Genre.update(
      { name },
      {
        where: {
          id: genre_id
        }
      }
    );
    res.send();
  },

  async destroy(req, res) {
    const { genre_id } = req.params;
    await Genre.destroy({
      where: {
        id: genre_id
      }
    });
    return res.send();
  }
};
