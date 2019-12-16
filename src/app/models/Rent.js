const { Model, DataTypes } = require('sequelize');

class Rent extends Model {

  static init(connection) {
    super.init({
      price: DataTypes.DOUBLE,
      devolution_date: DataTypes.DATE,
      limit_date: DataTypes.DATE,
      withdrawn_date: DataTypes.DATE,
    }, {
      sequelize: connection,
      tableName: 'rents',
    });
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: 'student_id',
      as: 'student',
    });
    this.belongsTo(models.BookCopy, {
      foreignKey: 'copy_id',
      as: 'copy',
    });
  }
}

module.exports = Rent;
