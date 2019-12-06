const Sequelize = require('sequelize');
const config = require('../config/database');
const Author = require('../models/Author');
const Book = require('../models/Book');
const Genre = require('../models/Genre');
const Publisher = require('../models/Publisher');
const BookCopy = require('../models/BookCopy');
const Rent = require('../models/Rent');
const Student = require('../models/Student');

const connection = new Sequelize(config);
const { models } = connection;

Author.init(connection);
Genre.init(connection);
Publisher.init(connection);
Book.init(connection);
BookCopy.init(connection);
Rent.init(connection);
Student.init(connection);

Author.associate(models);
Genre.associate(models);
Student.associate(models);
Publisher.associate(models);
Book.associate(models);
BookCopy.associate(models);
Rent.associate(models);

module.exports = connection;