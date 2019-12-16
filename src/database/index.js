const Sequelize = require('sequelize');

const Author = require('../app/models/Author');
const Book = require('../app/models/Book');
const Genre = require('../app/models/Genre');
const Publisher = require('../app/models/Publisher');
const Copy = require('../app/models/Copy');
const Rent = require('../app/models/Rent');
const Student = require('../app/models/Student');
const databaseConfig = require('../config/database');

const models = [Author, Book, Genre, Publisher, Copy, Rent, Student];

class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

module.exports = new Database();
