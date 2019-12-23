const { Model, Sequelize } = require('sequelize');

class Author extends Model {
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

module.exports = Author;
