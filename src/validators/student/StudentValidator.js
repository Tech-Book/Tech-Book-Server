const joi = require('joi');

module.exports = {
    body: {
        login: joi
        .string()
        .trim()
        .required()
        .label('Student Login'),
        password: joi
        .string()
        .trim()
        .required()
        .label('Student Password'),
        phone: joi
        .string()
        .trim()
        .required()
        .label('Student Phone'),
        name: joi
        .string()
        .trim()
        .required()
        .label('Student Name'),
    }
}