const Sequelize = require('sequelize');
const config = require('../config/database');
const Author = require('../models/Author');
const Book = require('../models/Book');
const Genrer = require('../models/Genrer');
const Publisher = require('../models/Publisher');

const connection = new Sequelize(config);
const { models } = connection;

Author.init(connection);
Genrer.init(connection);
Publisher.init(connection);
Book.init(connection);

Author.associate(models);
Genrer.associate(models);
Publisher.associate(models);
Book.associate(models);



module.exports = connection;