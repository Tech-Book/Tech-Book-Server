const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const CopyController = require('./CopyController');
const CopyValidator = require('../../validators/copy/CopyValidator');

const routes = express.Router();

routes.get('/', CopyController.index);
routes.post('/', validate(CopyValidator), handle(CopyController.store));
routes.get('/:copy_id', CopyController.show);
routes.delete('/:copy_id', CopyController.destroy);

module.exports = routes;