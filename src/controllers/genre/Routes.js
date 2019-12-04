const express = require('express');
const GenreController = require('./GenreController');

const routes = express.Router();

routes.get('/', GenreController.index);
routes.post('/', GenreController.store);
routes.get('/:genre_id', GenreController.show);
routes.put('/:genre_id', GenreController.update);
routes.delete('/:genre_id', GenreController.destroy);

module.exports = routes;