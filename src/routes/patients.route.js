const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
const {verifyToken} = require('../helpers/auth.helper');

router.get('/:id', verifyToken, patientController.getPatient);
router.get('/', patientController.getPatients);

router.put('/:id', verifyToken, patientController.updatePatient);

router.delete('/:id', verifyToken, patientController.removePatient);

module.exports = router;
