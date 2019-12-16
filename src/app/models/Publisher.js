const { Model, DataTypes } = require('sequelize');

class Publisher extends Model {
  static init(conn) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: conn,
      tableName: 'publishers',
    });
  }

  static associate(models) {
    this.hasMany(models.Book, {
      foreignKey: 'publisher_id',
      as: 'publisher',
    });
  }
}

module.exports = Publisher;

