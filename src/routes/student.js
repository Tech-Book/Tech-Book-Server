const Router = require('@koa/router');
const StudentController = require('../app/controllers/StudentController');

const router = new Router({
  prefix: '/students'
});

router
  .get('/', StudentController.index)
  .get('/:studentId', StudentController.show)
  .post('/', StudentController.store)
  .put('/:studentId', StudentController.update)
  .delete('/:studentId', StudentController.destroy);

module.exports = router;
