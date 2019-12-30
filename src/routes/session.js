const Router = require('@koa/router');
const SessionController = require('../app/controllers/SessionController');
const validateSession = require('../app/validators/Session');

const router = new Router({
  prefix: '/sessions'
});

router.post('/', validateSession, SessionController.store);

module.exports = router;
