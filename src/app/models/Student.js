const { Model, Sequelize } = require('sequelize');

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        login: Sequelize.STRING,
        password: Sequelize.STRING,
        phone: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Student;
