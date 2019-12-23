const Router = require('@koa/router');
const BookController = require('../app/controllers/BookController');

const router = new Router({
  prefix: '/books'
});

router
  .get('/', BookController.index)
  .get('/:bookId', BookController.show)
  .post('/', BookController.store)
  .put('/:bookId', BookController.update)
  .delete('/:bookId', BookController.destroy);

module.exports = router;
