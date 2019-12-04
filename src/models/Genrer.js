const { Model, DataTypes } = require('sequelize');

class Genrer extends Model {
    static init(conn) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: conn,
        });
    }

    static associate(models) {
        this.hasMany(models.Book, {
            foreignKey: 'gender_id',
            as: 'gender',
        });
    }
}

module.exports = Genrer;