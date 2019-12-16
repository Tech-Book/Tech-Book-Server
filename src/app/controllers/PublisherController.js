const Publisher = require('../../models/Publisher');

module.exports = {
  async index(req, res) {
    const publisher = await Publisher.findAll();
    res.json(publisher);
  },

  async show(req, res) {
    const { publisher_id } = req.params;
    const publisher = await Publisher.findByPk(publisher_id);
    if (!publisher) {
      return res.status(400).json({ message: 'Publisher not found' });
    }
    res.json(publisher);
  },

  async store(req, res) {
    const { name } = req.body;
    const publisher = await Publisher.create({ name });
    return res.json(publisher);
  },

  async update(req, res) {
    const { publisher_id } = req.params;
    const { name } = req.body;
    await Publisher.update(
      { name },
      {
        where: {
          id: publisher_id
        }
      }
    );
    res.send();
  },

  async destroy(req, res) {
    const { publisher_id } = req.params;
    await Publisher.destroy({
      where: {
        id: publisher_id
      }
    });
    return res.send();
  }
};
