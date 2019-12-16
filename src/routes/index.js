const combineRouters = require('koa-combine-routers');
const studentRouter = require('./student');
const authorRouter = require('./author');

const router = combineRouters(studentRouter, authorRouter);

module.exports = router;
