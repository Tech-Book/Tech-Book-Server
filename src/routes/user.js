const Router = require('@koa/router');
const UserController = require('../app/controllers/UserController');

const router = new Router({
  prefix: '/users'
});

router
  .get('/', UserController.index)
  .get('/:userId', UserController.show)
  .post('/', UserController.store)
  .put('/:userId', UserController.update)
  .delete('/:userId', UserController.destroy);

module.exports = router;
