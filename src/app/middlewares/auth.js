const jwt = require('jsonwebtoken')
const { promisify } = require('util');
const authConfig = require('../../config/auth');


module.exports = async (ctx, next) => {
  const authHeader = ctx.request.headers.authorization
  if (!authHeader) {
    ctx.throw(401, JSON.stringify({
      error: 'Token not provided',
    }));
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    ctx.request.isAdmin = false;
    ctx.request.userId = decoded.id;

    await next();
  } catch (error) {
    ctx.throw(401, JSON.stringify({
      error: 'Invalid Token'
    }));
  }

}
