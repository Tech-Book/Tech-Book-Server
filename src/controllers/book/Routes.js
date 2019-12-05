const express = require('express');
const BookController = require('./BookController');

const routes = express.Router();

routes.get('/', BookController.index);
routes.post('/', BookController.store);
routes.get('/:book_id', BookController.show);
routes.put('/:book_id', BookController.update);
routes.delete('/:book_id', BookController.destroy);

module.exports = routes;