const express = require('express');
const router = express.Router();

// Import user controller functions
const {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
  userPost,
  fetchuserWithPost,
} = require('../controllers/user.controller');

// Define user-related routes
router.post('/create', createUser);
router.get('/all', getAllUsers);
// router.get('/:id', getUserById);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

//Post Related Api
router.get("/fetchuserWithPost", fetchuserWithPost) //Isme agar user ko uske sath uske post dekhni hai to aayega 
module.exports = router;
