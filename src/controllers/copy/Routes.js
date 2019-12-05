const express = require('express');
const CopyController = require('./CopyController');

const routes = express.Router();

routes.get('/', CopyController.index);
routes.post('/', CopyController.store);
routes.get('/:copy_id', CopyController.show);
routes.delete('/:copy_id', CopyController.destroy);

module.exports = routes;