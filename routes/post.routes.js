const express = require('express');
const router = express.Router();
const { createPost,  getPostById, updatePost, deletePost, getAllPosts } = require('../controllers/post.controller');

// Define user-related routes
router.post('/create', createPost);
router.get('/all', getAllPosts);
router.get('/:id', getPostById);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

module.exports = router;
