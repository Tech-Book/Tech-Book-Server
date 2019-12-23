const combineRouters = require('koa-combine-routers');
const userRouter = require('./user');
const sessionRouter = require('./session');
const authorRouter = require('./author');

const router = combineRouters(userRouter, authorRouter, sessionRouter);

module.exports = router;
