const Author = require('../models/Author');

class AuthorController {
  async index(ctx, next) {
    const author = await Author.findAll();
    ctx.response.body = author;
    await next();
  }

  async show(ctx, next) {
    const { authorId } = ctx.params;
    const author = await Author.findByPk(authorId);
    ctx.response.body = author;
    await next();
  }

  async store(ctx, next) {
    const { name } = ctx.request.body;
    const author = await Author.create({ name });
    ctx.status = 201;
    ctx.response.body = author;
    await next();
  }

  async update(ctx, next) {
    const { authorId } = ctx.params;
    const { name } = ctx.request.body;
    const author = await Author.findByPk(authorId);
    await author.update({ name });
    ctx.response.body = author;
    await next();
  }

  async destroy(ctx, next) {
    const { authorId } = ctx.params;
    await Author.destroy({
      where: {
        id: authorId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new AuthorController();
