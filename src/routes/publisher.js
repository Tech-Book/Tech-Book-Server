const Router = require('@koa/router');
const PublisherController = require('../app/controllers/PublisherController');

const router = new Router({
  prefix: '/publishers'
});

router
  .get('/', PublisherController.index)
  .get('/:publisherId', PublisherController.show)
  .post('/', PublisherController.store)
  .put('/:publisherId', PublisherController.update)
  .delete('/:publisherId', PublisherController.destroy);

module.exports = router;
