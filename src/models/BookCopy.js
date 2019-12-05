const { Model } = require('sequelize');

class BookCopy extends Model {

    static init(connection) {
        super.init({}, {
            sequelize: connection,
            tableName: 'copies',
        });
    }

    static associate(models) {
        this.belongsTo(models.Book, {
            foreignKey: 'book_id',
            as: 'book',
        });
        this.hasMany(models.Lending, {
            foreignKey: 'copy_id',
            as: 'copy',
        });
    }
}

module.exports = BookCopy;