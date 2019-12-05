const express = require('express');
const StudentController = require('./StudentController');

const routes = express.Router();

routes.get('/', StudentController.index);
routes.post('/', StudentController.store);
routes.get('/:student_id', StudentController.show);
routes.put('/:student_id', StudentController.update);
routes.delete('/:student_id', StudentController.destroy);

module.exports = routes;