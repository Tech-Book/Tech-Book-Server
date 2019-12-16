const { Model, Sequelize } = require('sequelize');

class Copy extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Book, {
      foreignKey: ['book_id', 'bookId'],
      as: 'book'
    });
  }
}

module.exports = Copy;
