const express = require('express');

const routes = express.Router();

routes.use('/authors', require('./controllers/author/Routes'));
routes.use('/genres', require('./controllers/genrer/Routes'));

module.exports = routes;