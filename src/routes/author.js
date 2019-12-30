const Router = require('@koa/router');
const AuthorController = require('../app/controllers/AuthorController');
const validateAuthor = require('../app/validators/Author');

const router = new Router({
  prefix: '/authors'
});

router
  .get('/', AuthorController.index)
  .get('/:authorId', AuthorController.show)
  .post('/', validateAuthor, AuthorController.store)
  .put('/:authorId', validateAuthor, AuthorController.update)
  .delete('/:authorId', AuthorController.destroy);

module.exports = router;
