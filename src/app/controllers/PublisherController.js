const Publisher = require('../models/Publisher');

class PublisherController {
  async index(ctx, next) {
    const publisher = await Publisher.findAll();
    ctx.response.body = publisher;
    await next();
  }

  async show(ctx, next) {
    const { publisherId } = ctx.params;
    const publisher = await Publisher.findByPk(publisherId);
    ctx.response.body = publisher;
    await next();
  }

  async store(ctx, next) {
    const { name } = ctx.request.body;
    const publisher = await Publisher.create({ name });
    ctx.status = 201;
    ctx.response.body = publisher;
    await next();
  }

  async update(ctx, next) {
    const { publisherId } = ctx.params;
    const { name } = ctx.body;
    const publisher = await Publisher.findByPk(publisherId);
    await publisher.update({ name });
    ctx.response.body = publisher;
    await next();
  }

  async destroy(ctx, next) {
    const { publisherId } = ctx.params;
    await Publisher.destroy({
      where: {
        id: publisherId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new PublisherController();
