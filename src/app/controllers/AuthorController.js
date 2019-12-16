const Author = require('../../models/Author');

module.exports = {
  async index(ctx, next) {
    const author = await Author.findAll();
    ctx.response.body = author;
    await next();
  },

  async show(ctx, next) {
    const { authorId } = req.params;
    const author = await Author.findByPk(authorId);
    ctx.response.body = author;
    await next();
  },

  async store(ctx, next) {
    const { name } = req.body;
    const author = await Author.create({ name });
    ctx.response.body = author;
    await next();
  },

  async update(ctx, next) {
    const { authorId } = req.params;
    const { name } = req.body;
    const author = await Author.update(
      { name },
      {
        where: {
          id: authorId
        }
      }
    );
    ctx.response.body = author;
    await next();
  },

  async destroy(req, res) {
    const { author_id } = req.params;
    await Author.destroy({
      where: {
        id: author_id
      }
    });
    ctx.response.body = {};
    await next();
  }
};
