const Router = require('@koa/router');
const PublisherController = require('../app/controllers/PublisherController');
const validatePublisher = require('../app/validators/Publisher');

const router = new Router({
  prefix: '/publishers'
});

router
  .get('/', PublisherController.index)
  .get('/:publisherId', PublisherController.show)
  .post('/', validatePublisher, PublisherController.store)
  .put('/:publisherId', validatePublisher, PublisherController.update)
  .delete('/:publisherId', PublisherController.destroy);

module.exports = router;
