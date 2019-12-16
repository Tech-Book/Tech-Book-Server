const Copy = require('../models/Copy');

class CopyController {
  async index(ctx, next) {
    const copies = await Copy.findAll();
    ctx.response.body = copies;
    await next();
  }

  async show(ctx, next) {
    const { copyId } = ctx.params;
    const copy = await Copy.findByPk(copyId);
    ctx.response.body = copy;
    await next();
  }

  async store(ctx, next) {
    const copy = await Copy.create();
    ctx.status = 201;
    ctx.response.body = copy;
    await next();
  }

  async destroy(ctx, next) {
    const { copyId } = ctx.params;
    await Copy.destroy({
      where: {
        id: copyId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new CopyController();
