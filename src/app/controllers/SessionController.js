const User = require('../models/User');

class SessionController {
  async store(ctx, next) {
    const { email, password } = ctx.request.body

    const user = await User.findOne({ where: { email } });
    if (!user) {
      ctx.throw(400, JSON.stringify({
        error: 'Usário não encontrado',
      }));
    }

    if (!(await user.checkPassword(password))) {
      ctx.throw(400, JSON.stringify({
        error: 'Senha inválida',
      }));
    }

    ctx.response.body = {
      token: User.generateToken(user.id, false)
    }

    await next();
  }
}

module.exports = new SessionController();
