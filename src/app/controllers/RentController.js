const Rent = require('../models/Rent');

class RentController {
  async index(ctx, next) {
    const rents = await Rent.findAll();
    ctx.response.body = rents;
    await next();
  }

  async show(ctx, next) {
    const { rentId } = ctx.params;
    const rent = await Rent.findByPk(rentId);
    ctx.response.body = rent;
    await next();
  }

  async store(ctx, next) {
    const {
      price,
      devolutionDate,
      limitDate,
      withdrawnDate
    } = ctx.request.body;
    const rent = await Rent.create({
      price,
      devolutionDate,
      limitDate,
      withdrawnDate
    });
    ctx.status = 201;
    ctx.response.body = rent;
    await next();
  }

  async update(ctx, next) {
    const { rentId } = ctx.params;
    const rent = await Rent.findByPk(rentId);
    const {
      price,
      devolutionDate,
      limitDate,
      withdrawnDate
    } = ctx.request.body;
    await rent.update({ price, devolutionDate, limitDate, withdrawnDate });
    ctx.response.body = rent;
    await next();
  }

  async destroy(ctx, next) {
    const { rentId } = ctx.params;
    await Rent.destroy({
      where: {
        id: rentId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new RentController();
