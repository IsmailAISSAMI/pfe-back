const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');
const {verifyToken} = require('../helpers/auth.helper');

router.get('/:id', verifyToken, doctorController.getDoctor);
router.get('/', doctorController.getDoctors);

router.put('/:id', verifyToken, doctorController.updateDoctor);

router.delete('/:id', verifyToken, doctorController.removeDoctor);

module.exports = router;
