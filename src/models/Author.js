const { Model, DataTypes } = require('sequelize');

class Author extends Model {
    static init(conn) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: conn,
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