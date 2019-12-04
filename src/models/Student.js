const { Model, DataTypes } = require('sequelize');

class Student extends Model {

    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            login: DataTypes.STRING,
            password: DataTypes.STRING,
            phone: DataTypes.STRING,

        }, {
            sequelize: connection,
        });
    }

    static associate(models) {
        this.hasMany(models.Lending, {
            foreignKey: 'student_id',
            as: 'student',
        });
    }
}

module.exports = Student;