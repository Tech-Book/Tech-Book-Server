const { Model, Sequelize } = require('sequelize');

class Publisher extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Publisher;
