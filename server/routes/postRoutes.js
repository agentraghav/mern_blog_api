const router = require('express').Router();

const post_controller = require('../controllers/postController');

router.post('/', post_controller.blogPost);

router.get('/', post_controller.blogGet);

router.get('/:id', post_controller.blogGetId);

module.exports = router;
