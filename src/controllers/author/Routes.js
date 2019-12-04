const express = require('express');
const AuthorController = require('./AuthorController');

const routes = express.Router();

routes.get('/', AuthorController.index);
routes.post('/', AuthorController.store);
routes.get('/:author_id', AuthorController.show);
routes.put('/:author_id', AuthorController.update);
routes.delete('/:author_id', AuthorController.destroy);

module.exports = routes;