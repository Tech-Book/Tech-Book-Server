const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { Model, Sequelize } = require('sequelize');
const authConfig = require('../../config/auth');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        role: Sequelize.ENUM(['ADMIN', 'MEMBER', 'BANNED'])
      },
      {
        sequelize
      }
    );
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
  }

  generateToken(id) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });
  }


  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;
