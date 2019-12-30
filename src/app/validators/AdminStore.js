const joi = require('joi');

module.exports = async (ctx, next) => {
  const schema = joi.object({
    companyName: joi
      .string()
      .trim()
      .required()
      .label('Company Name'),
    cnpj: joi
      .string()
      .trim()
      .required()
      .label('CNPJ')
  });
  const { body } = ctx.request;
  try {
    await schema.validate(body);
    await next();
  } catch (err) {
    ctx.throw(400, JSON.stringify(err));
  }
};
