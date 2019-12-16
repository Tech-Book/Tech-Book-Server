const { Model, DataTypes } = require('sequelize');

class Author extends Model {
  static init(conn) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: conn,
      tableName: 'authors',
    });
  }

  static associate(models) {

    this.hasMany(models.Book, {
      foreignKey: 'author_id',
      as: 'author',
    });
  }
}

module.exports = Author;
