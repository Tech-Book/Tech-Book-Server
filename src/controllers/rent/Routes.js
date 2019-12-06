const express = require('express');
const RentController = require('./RentController');

const routes = express.Router();

routes.get('/', RentController.index);
routes.post('/', RentController.store);
routes.get('/:rent_id', RentController.show);
routes.delete('/:rent_id', RentController.destroy);
routes.put('/:rent_id', RentController.update);

module.exports = routes;