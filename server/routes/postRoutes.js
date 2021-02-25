const router = require('express').Router();

const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');

router.post('/', post_controller.blogPost);

router.get('/', post_controller.blogGet);

router.get('/:id', post_controller.blogGetId);

router.delete('/:id', post_controller.blogDelete);

router.get('/comment', comment_controller.comment_get);

router.post('/comment', comment_controller.comment_post);

module.exports = router;
