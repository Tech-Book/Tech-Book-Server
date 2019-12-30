const joi = require('joi');

module.exports = async (ctx, next) => {
  const schema = joi.object({
    login: joi
      .string()
      .trim()
      .required()
      .label('Student Login'),
    password: joi
      .string()
      .trim()
      .required()
      .label('Student Password'),
    phone: joi
      .string()
      .trim()
      .required()
      .label('Student Phone'),
    name: joi
      .string()
      .trim()
      .required()
      .label('Student Name')
  });
  const { body } = ctx.request;
  try {
    await schema.validate(body);
    await next();
  } catch (err) {
    ctx.throw(400, JSON.stringify(err));
  }
};
