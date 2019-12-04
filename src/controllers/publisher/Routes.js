const express = require('express');
const PublisherController = require('./PublisherController');

const routes = express.Router();

routes.get('/', PublisherController.index);
routes.post('/', PublisherController.store);
routes.get('/:publisher_id', PublisherController.show);
routes.put('/:publisher_id', PublisherController.update);
routes.delete('/:publisher_id', PublisherController.destroy);

module.exports = routes;