const Router = require('@koa/router');
const CopyController = require('../app/controllers/CopyController');
const validateCopy = require('../app/validators/Copy');

const router = new Router({
  prefix: '/copies'
});

router
  .get('/', CopyController.index)
  .get('/:copyId', CopyController.show)
  .post('/', validateCopy, CopyController.store)
  .put('/:copyId', validateCopy, CopyController.update)
  .delete('/:copyId', CopyController.destroy);

module.exports = router;
