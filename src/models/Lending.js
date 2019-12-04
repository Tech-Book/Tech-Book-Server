const { Model, DataTypes } = require('sequelize');

class Lending extends Model {

    static init(connection) {
        super.init({
            devolution_date: DataTypes.DATE,
            limit_date: DataTypes.DATE,
            delivered_date: DataTypes.DATE,
        }, {
            sequelize: connection,
            tableName: 'lendings',
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

module.exports = Lending;