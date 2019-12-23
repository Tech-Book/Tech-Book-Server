const User = require('../models/User');

class UsertController {
  async index(ctx, next) {
    const users = await User.findAll();
    ctx.response.body = users;
    await next();
  }

  async show(ctx, next) {
    const { userId } = ctx.params;
    const user = await User.findByPk(userId);
    ctx.response.body = user;
    await next();
  }

  async store(ctx, next) {
    const { email, password, role } = ctx.request.body;
    const user = await User.create({ email, password, role });
    ctx.status = 201;
    ctx.response.body = user;
    await next();
  }

  async update(ctx, next) {
    const { userId } = ctx.params;
    const user = await User.findByPk(userId);
    const { email, password, role } = ctx.request.body;
    await user.update({ email, password, role });
    ctx.response.body = user;
    await next();
  }

  async destroy(ctx, next) {
    const { userId } = ctx.params;
    await User.destroy({
      where: {
        id: userId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new UsertController();
