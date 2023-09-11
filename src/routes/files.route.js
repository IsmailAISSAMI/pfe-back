const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file.controller');
const {verifyToken} = require('../helpers/auth.helper');

router.get('/:id', verifyToken, fileController.getFile);
router.get('/', verifyToken, fileController.getFiles);

router.post('/', verifyToken, fileController.createFile);

router.put('/:id', verifyToken, fileController.updateFile);

router.delete('/:id', verifyToken, fileController.removeFile);

module.exports = router;
