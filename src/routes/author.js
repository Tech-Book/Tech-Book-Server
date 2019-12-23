const Router = require('@koa/router');
const AuthorController = require('../app/controllers/AuthorController');

const router = new Router({
  prefix: '/authors'
});

router
  .get('/', AuthorController.index)
  .get('/:authorId', AuthorController.show)
  .post('/', AuthorController.store)
  .put('/:authorId', AuthorController.update)
  .delete('/:authorId', AuthorController.destroy);

module.exports = router;
