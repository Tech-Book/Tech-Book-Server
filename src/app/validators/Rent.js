const joi = require('joi');

module.exports = async (ctx, next) => {
  const schema = joi.object({
    copyId: joi
      .number()
      .positive()
      .integer()
      .label('Book Copy Id'),
    studentId: joi
      .number()
      .positive()
      .integer()
      .label('Student Id'),
    limitDate: joi
      .date()
      .required()
      .label('Limit Date'),
    withdrawnDate: joi
      .date()
      .required()
      .label('Withdrawn Date'),
    devolutionDate: joi
      .date()
      .optional()
      .default(null)
      .label('Devolution Date'),
    price: joi
      .number()
      .positive()
      .required()
      .label('Price')
  });
  const { body } = ctx.request;
  try {
    await schema.validate(body);
    await next();
  } catch (err) {
    ctx.throw(400, JSON.stringify(err));
  }
};
