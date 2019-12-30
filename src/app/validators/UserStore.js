const joi = require('joi');

module.exports = async (ctx, next) => {
  const schema = joi.object({
    email: joi
      .string()
      .trim()
      .required()
      .label('E-mail'),
    role: joi
      .string()
      .trim()
      .required()
      .label('Role'),
    password: joi
      .string()
      .min(6)
      .trim()
      .required()
      .label('Password')
  });
  const { body } = ctx.request;
  try {
    await schema.validate(body);
    await next();
  } catch (err) {
    ctx.throw(400, JSON.stringify(err));
  }
};
