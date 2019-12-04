const { Model, DataTypes } = require('sequelize');

class Publisher extends Model {
    static init(conn) {
        super.init({
            title: DataTypes.STRING,
            release_date: DataTypes.DATE,
        }, {
            sequelize: conn,
        });
    }

    static associate(models) {
        this.hasMany(models.BookCopy, {
            foreignKey: 'book_id',
            as: 'copies',
        });
        this.belongsTo(models.Author, {
            foreignKey: 'author_id',
            as: 'author',
        });
        this.belongsTo(models.Gender, {
            foreignKey: 'gender_id',
            as: 'gender',
        });
        this.belongsTo(models.Publisher, {
            foreignKey: 'publisher_id',
            as: 'publisher',
        });
    }
}

module.exports = Publisher;