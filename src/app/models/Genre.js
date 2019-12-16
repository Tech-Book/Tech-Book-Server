const { Model, Sequelize } = require('sequelize');

class Genrer extends Model {
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

module.exports = Genrer;
