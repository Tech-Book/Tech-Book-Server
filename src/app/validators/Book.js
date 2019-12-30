const joi = require('joi');

module.exports = async (ctx, next) => {
  const schema = joi.object({
    title: joi
      .string()
      .trim()
      .required()
      .label('Book Title'),
    authorId: joi
      .number()
      .positive()
      .integer()
      .label('Author Id'),
    publisherId: joi
      .number()
      .positive()
      .integer()
      .label('Publisher Id'),
    genreId: joi
      .number()
      .positive()
      .integer()
      .label('Genre Id'),
    releaseDate: joi.date().required()
  });
  const { body } = ctx.request;
  try {
    await schema.validate(body);
    await next();
  } catch (err) {
    ctx.throw(400, JSON.stringify(err));
  }
};
