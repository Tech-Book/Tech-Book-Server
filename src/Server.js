// require('./database');
const express = require('express');
const routes = require('./Routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000);