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
        this.belongsTo(models.Author, {
            foreignKey: 'author_id',
            as: 'Author',
        });
        this.belongsTo(models.Gender, {
            foreignKey: 'gender_id',
            as: 'Gender',
        });
        this.belongsTo(models.Publisher, {
            foreignKey: 'publisher_id',
            as: 'Publisher',
        });
    }
}

module.exports = Publisher;