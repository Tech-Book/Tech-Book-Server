const Router = require('@koa/router');
const RentController = require('../app/controllers/RentController');

const router = new Router({
  prefix: '/rents'
});

router
  .get('/', RentController.index)
  .get('/:rentId', RentController.show)
  .post('/', RentController.store)
  .put('/:rentId', RentController.update)
  .delete('/:rentId', RentController.destroy);

module.exports = router;
