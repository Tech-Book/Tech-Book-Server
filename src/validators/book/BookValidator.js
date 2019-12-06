const joi = require('joi');

module.exports = {
    body: {
        title: joi
        .string()
        .trim()
        .required()
        .label('Book Title'),
        author_id: joi
        .number()
        .positive()
        .integer()
        .label('Author Id'),
        publisher_id: joi
        .number()
        .positive()
        .integer()
        .label('Publisher Id'),
        genre_id: joi
        .number()
        .positive()
        .integer()
        .label('Genre Id'),
        release_date: joi
        .date()
        .required()
    }
}