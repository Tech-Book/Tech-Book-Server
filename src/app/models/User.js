const { Model, Sequelize } = require('sequelize');

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
  }
}

module.exports = User;
