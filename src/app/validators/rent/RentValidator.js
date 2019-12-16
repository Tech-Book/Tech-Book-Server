const joi = require('joi');

module.exports = {
    body: {
        copy_id: joi
        .number()
        .positive()
        .integer()
        .label('Book Copy Id'),
        student_id: joi
        .number()
        .positive()
        .integer()
        .label('Student Id'),
        limit_date: joi
        .date()
        .required()
        .label('Limit Date'),
        withdrawn_date: joi
        .date()
        .required()
        .label('Withdrawn Date'),
        devolution_date: joi
        .date()
        .optional()
        .default(null)
        .label('Devolution Date'),
        price: joi
        .number()
        .positive()
        .required()
        .label('Price')
    }
}