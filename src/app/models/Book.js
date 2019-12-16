const { Model, Sequelize } = require('sequelize');

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        releaseDate: Sequelize.DATE
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'author'
    });
    this.belongsTo(models.Genrer, {
      foreignKey: 'genre_id',
      as: 'genre'
    });
    this.belongsTo(models.Publisher, {
      foreignKey: 'publisher_id',
      as: 'publisher'
    });
  }
}

module.exports = Book;
