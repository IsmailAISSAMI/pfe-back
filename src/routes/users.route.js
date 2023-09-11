const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {verifyToken} = require('../helpers/auth.helper');

// GET
router.get('/:id', verifyToken, userController.getUser);
router.get('/', userController.getUsers); 

// UPDATE
router.put('/:id', verifyToken, userController.updateUser); 

// DELETE
router.delete('/:id', verifyToken, userController.removeUser); // Soft delete a specific user by ID

module.exports = router;
