const Router = require('@koa/router');
const GenreController = require('../app/controllers/GenreController');

const router = new Router({
  prefix: '/genres'
});

router
  .get('/', GenreController.index)
  .get('/:genreId', GenreController.show)
  .post('/', GenreController.store)
  .put('/:genreId', GenreController.update)
  .delete('/:genreId', GenreController.destroy);

module.exports = router;
