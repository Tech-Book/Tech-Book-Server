const { Model, DataTypes } = require('sequelize');

class Genrer extends Model {
  static init(conn) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: conn,
      tableName: 'genres',
    });
  }

  static associate(models) {
    this.hasMany(models.Book, {
      foreignKey: 'genre_id',
      as: 'genre',
    });
  }
}

module.exports = Genrer;
