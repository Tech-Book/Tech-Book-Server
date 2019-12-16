const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const BookController = require('./BookController');
const BookValidator = require('../../validators/book/BookValidator');

const routes = express.Router();

routes.get('/', BookController.index);
routes.post('/', validate(BookValidator), handle(BookController.store));
routes.get('/:book_id', BookController.show);
routes.put('/:book_id', validate(BookValidator), handle(BookController.update));
routes.delete('/:book_id', BookController.destroy);

module.exports = routes;