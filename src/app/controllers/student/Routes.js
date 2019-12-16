const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const StudentController = require('./StudentController');
const StudentValidator = require('../../validators/student/StudentValidator');

const routes = express.Router();

routes.get('/', StudentController.index);
routes.post('/', validate(StudentValidator), handle(StudentController.store));
routes.get('/:student_id', StudentController.show);
routes.put('/:student_id', validate(StudentValidator), handle(StudentController.update));
routes.delete('/:student_id', StudentController.destroy);

module.exports = routes;