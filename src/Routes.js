const express = require('express');

const routes = express.Router();

routes.use('/authors', require('./controllers/author/Routes'));

module.exports = routes;