const combineRouters = require('koa-combine-routers');
const userRouter = require('./user');
const sessionRouter = require('./session');
const authorRouter = require('./author');
const bookRouter = require('./book');

const router = combineRouters(
  userRouter,
  authorRouter,
  sessionRouter,
  bookRouter
);

module.exports = router;
