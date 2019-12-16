const joi = require('joi');

module.exports = {
    body: {
        book_id: joi
        .number()
        .positive()
        .required()
        .label('Book Id')
    }
}