const Router = require('@koa/router');
const CopyController = require('../app/controllers/CopyController');

const router = new Router({
  prefix: '/copies'
});

router
  .get('/', CopyController.index)
  .get('/:copyId', CopyController.show)
  .post('/', CopyController.store)
  .put('/:copyId', CopyController.update)
  .delete('/:copyId', CopyController.destroy);

module.exports = router;
