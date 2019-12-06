const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const GenreController = require('./GenreController');
const GenreValidator = require('../../validators/genre/GenreValidator');

const routes = express.Router();

routes.get('/', GenreController.index);
routes.post('/', validate(GenreValidator), handle(GenreController.store));
routes.get('/:genre_id', GenreController.show);
routes.put('/:genre_id', validate(GenreValidator), handle(GenreController.update));
routes.delete('/:genre_id', GenreController.destroy);

module.exports = routes;