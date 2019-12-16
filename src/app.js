require('dotenv/config');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = new Koa();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(bodyParser());
  }

  routes() {
    this.server.use(router());
  }

  exceptionHandler() {
    this.server.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
      }
    });
  }
}

module.exports = new App().server;
