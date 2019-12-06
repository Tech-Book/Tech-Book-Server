const express = require('express');

const routes = express.Router();

routes.use('/authors', require('./controllers/author/Routes'));
routes.use('/genres', require('./controllers/genre/Routes'));
routes.use('/publishers', require('./controllers/publisher/Routes'));
routes.use('/books', require('./controllers/book/Routes'));
routes.use('/students', require('./controllers/student/Routes'));
routes.use('/copies', require('./controllers/copy/Routes'));
routes.use('/rents', require('./controllers/rent/Routes'));

module.exports = routes;