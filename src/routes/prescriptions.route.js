const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescription.controller');
const {verifyToken} = require('../helpers/auth.helper');

router.get('/:id', verifyToken, prescriptionController.getPrescription);
router.get('/', verifyToken, prescriptionController.getPrescriptions);

router.post('/', verifyToken, prescriptionController.createPrescription);

router.put('/:id', verifyToken, prescriptionController.updatePrescription);

router.delete('/:id', verifyToken, prescriptionController.removePrescription);

module.exports = router;
