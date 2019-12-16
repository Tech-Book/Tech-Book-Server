const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const RentController = require('./RentController');
const RentValidator = require('../../validators/rent/RentValidator');

const routes = express.Router();

routes.get('/', RentController.index);
routes.post('/', validate(RentValidator), handle(RentController.store));
routes.get('/:rent_id', RentController.show);
routes.put('/:rent_id', validate(RentValidator), handle(RentController.update));
routes.delete('/:rent_id', RentController.destroy);

module.exports = routes;