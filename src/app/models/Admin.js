const { Model, Sequelize } = require('sequelize');

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        companyName: Sequelize.STRING,
        cnpj: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: ['user_id', 'userId'],
      as: 'user'
    });
  }
}

module.exports = Admin;
