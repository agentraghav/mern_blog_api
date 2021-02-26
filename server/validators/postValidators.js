const { body } = require('express-validator');

exports.post_validation = [
  body('title')
    .trim()
    .escape()
    .withMessage('title must be specified.')
    .isAlphanumeric()
    .withMessage('title has non-alphanumeric characters.'),
  body('content').trim().escape().withMessage('Content must be specified.'),
];
