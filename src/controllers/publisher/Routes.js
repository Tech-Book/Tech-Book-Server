const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const PublisherController = require('./PublisherController');
const PublisherValidator = require('../../validators/publisher/PublisherValidator');

const routes = express.Router();

routes.get('/', PublisherController.index);
routes.post('/', validate(PublisherValidator), handle(PublisherController.store));
routes.get('/:publisher_id', PublisherController.show);
routes.put('/:publisher_id', validate(PublisherValidator), handle(PublisherController.update));
routes.delete('/:publisher_id', PublisherController.destroy);

module.exports = routes;