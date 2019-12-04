const express = require('express');
const GenrerController = require('./GenrerController');

const routes = express.Router();

routes.get('/', GenrerController.index);
routes.post('/', GenrerController.store);
routes.get('/:genre_id', GenrerController.show);
routes.put('/:genre_id', GenrerController.update);
routes.delete('/:genre_id', GenrerController.destroy);

module.exports = routes;