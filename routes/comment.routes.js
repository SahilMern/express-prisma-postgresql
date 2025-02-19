const express = require('express');
const { fetchcomment, createComment, updatecomment, deletecomment, showMyComment } = require('../controllers/comment.controller');
const router = express.Router();

// Define user-related routes
router.post('/createComment', createComment);
router.get('/fetchcomment', fetchcomment);
router.put('/updatecomment', updatecomment);
router.delete('/deletecomment', deletecomment);

router.get('/showMyComment', showMyComment);



module.exports = router;
