const Genre = require('../models/Genre');

class GenreController {
  async index(ctx, next) {
    const genres = await Genre.findAll();
    ctx.response.body = genres;
    await next();
  }

  async show(ctx, next) {
    const { genreId } = ctx.params;
    const genre = await Genre.findByPk(genreId);
    ctx.response.body = genre;
    await next();
  }

  async store(ctx, next) {
    const { name } = ctx.request.body;
    const genre = await Genre.create({ name });
    ctx.status = 201;
    ctx.response.body = genre;
    await next();
  }

  async update(ctx, next) {
    const { genreId } = ctx.params;
    const { name } = ctx.request.body;
    const genre = await Genre.findByPk(genreId);
    await genre.update({ name });
    ctx.response.body = genre;
    await next();
  }

  async destroy(ctx, next) {
    const { genreId } = ctx.params;
    await Genre.destroy({
      where: {
        id: genreId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new GenreController();
