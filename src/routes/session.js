const Router = require('@koa/router');
const SessionController = require('../app/controllers/SessionController');

const router = new Router({
  prefix: '/sessions'
});

router
  .post('/', SessionController.store)

module.exports = router;
