const router = require('express').Router();

const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');
const post_validation = require('../validators/postValidators');

router.post('/', post_validation.post_validation, post_controller.blogPost);

router.get('/', post_controller.blogGet);

router.get('/:id', post_controller.blogGetId);

router.delete('/:id', post_controller.blogDelete);

router.put('/:id', post_validation.post_validation, post_controller.blogUpdate);

router.post('/comment/:id', comment_controller.comment_post);

module.exports = router;
