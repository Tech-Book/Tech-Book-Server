const Router = require('@koa/router');
const GenreController = require('../app/controllers/GenreController');
const validateGenre = require('../app/validators/Genre');

const router = new Router({
  prefix: '/genres'
});

router
  .get('/', GenreController.index)
  .get('/:genreId', GenreController.show)
  .post('/', validateGenre, GenreController.store)
  .put('/:genreId', validateGenre, GenreController.update)
  .delete('/:genreId', GenreController.destroy);

module.exports = router;
