const express = require('express');

const routes = express.Router();

routes.use('/authors', require('./controllers/author/Routes'));
routes.use('/genres', require('./controllers/genre/Routes'));
routes.use('/publishers', require('./controllers/publisher/Routes'));

module.exports = routes;