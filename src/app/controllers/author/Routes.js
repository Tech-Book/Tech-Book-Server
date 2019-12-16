const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const AuthorController = require('./AuthorController');
const AuthorValidator = require('../../validators/author/AuthorValidator');

const routes = express.Router();

routes.get('/', AuthorController.index);
routes.post('/', validate(AuthorValidator), handle(AuthorController.store));
routes.get('/:author_id', AuthorController.show);
routes.put('/:author_id', validate(AuthorValidator), handle(AuthorController.update));
routes.delete('/:author_id', AuthorController.destroy);

module.exports = routes;
