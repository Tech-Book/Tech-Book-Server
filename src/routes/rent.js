const Router = require('@koa/router');
const RentController = require('../app/controllers/RentController');
const validateRent = require('../app/validators/Rent');

const router = new Router({
  prefix: '/rents'
});

router
  .get('/', RentController.index)
  .get('/:rentId', RentController.show)
  .post('/', validateRent, RentController.store)
  .put('/:rentId', validateRent, RentController.update)
  .delete('/:rentId', RentController.destroy);

module.exports = router;
