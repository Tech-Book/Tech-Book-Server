const joi = require('joi');

module.exports = {
    body: {
        name: joi
        .string()
        .trim()
        .required()
        .label('Publisher Name')
    }
}