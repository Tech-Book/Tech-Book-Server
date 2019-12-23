const Admin = require('../models/Admin');

class AdminController {

  async index(ctx, next) {
    const admins = await Admin.findAll();
    ctx.response.body = admins;
    await next();
  }

  async show(ctx, next) {
    const { adminId } = ctx.params;
    const admin = await Admin.findByPk(adminId);
    ctx.response.body = admin;
    await next();
  }

  async store(ctx, next) {
    const { companyName, cnpj } = ctx.request.body;
    const admin = await Admin.create({ companyName, cnpj });
    ctx.status = 201;
    ctx.response.body = admin;
    await next();
  }

  async update(ctx, next) {
    const { adminId } = ctx.params;
    const admin = await Admin.findByPk(adminId);
    const { companyName, cnpj } = ctx.request.body;
    await admin.update({ companyName, cnpj });
    ctx.response.body = admin;
    await next();
  }

  async destroy(ctx, next) {
    const { adminId } = ctx.params;
    await Admin.destroy({
      where: {
        id: adminId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new AdminController();
