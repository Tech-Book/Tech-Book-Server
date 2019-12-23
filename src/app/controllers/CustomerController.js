const Customer = require('../models/Customer');

class CustomerController {

  async index(ctx, next) {
    const costumers = await Customer.findAll();
    ctx.response.body = costumers;
    await next();
  }

  async show(ctx, next) {
    const { customerId } = ctx.params;
    const customer = await Customer.findByPk(customerId);
    ctx.response.body = customer;
    await next();
  }

  async store(ctx, next) {
    const { name, phone } = ctx.request.body;
    const customer = await Customer.create({ name, phone });
    ctx.status = 201;
    ctx.response.body = customer;
    await next();
  }

  async update(ctx, next) {
    const { customerId } = ctx.params;
    const customer = await Customer.findByPk(customerId);
    const { name, phone } = ctx.request.body;
    await customer.update({ name, phone });
    ctx.response.body = customer;
    await next();
  }

  async destroy(ctx, next) {
    const { customerId } = ctx.params;
    await Customer.destroy({
      where: {
        id: customerId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new CustomerController();
