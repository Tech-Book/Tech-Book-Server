const Router = require('@koa/router');
const BookController = require('../app/controllers/BookController');
const validateBook = require('../app/validators/Book');

const router = new Router({
  prefix: '/books'
});

router
  .get('/', BookController.index)
  .get('/:bookId', BookController.show)
  .post('/', validateBook, BookController.store)
  .put('/:bookId', validateBook, BookController.update)
  .delete('/:bookId', BookController.destroy);

module.exports = router;
