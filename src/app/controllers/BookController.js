const Book = require('../models/Book');

class BookController {
  async index(ctx, next) {
    const books = await Book.findAll();
    ctx.response.body = books;
    await next();
  }

  async show(ctx, next) {
    const { bookId } = ctx.params;
    const book = await Book.findByPk(bookId);
    ctx.response.body = book;
    await next();
  }

  async store(ctx, next) {
    const { title, releaseDate } = ctx.request.body;
    const book = await Book.create({ title, releaseDate });
    ctx.status = 201;
    ctx.response.body = book;
    await next();
  }

  async update(ctx, next) {
    const { bookId } = ctx.params;
    const { title, releaseDate } = ctx.request.body;
    const book = await Book.findByPk(bookId);
    await book.update({ title, releaseDate });
    ctx.response.body = book;
    await next();
  }

  async destroy(ctx, next) {
    const { bookId } = ctx.params;
    await Book.destroy({
      where: {
        id: bookId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new BookController();
