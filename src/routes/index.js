const combineRouters = require('koa-combine-routers');
const studentRouter = require('./student');

const router = combineRouters(studentRouter);

module.exports = router;
