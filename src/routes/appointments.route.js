const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');
const {verifyToken} = require('../helpers/auth.helper');

router.get('/:id', verifyToken, appointmentController.getAppointment);
router.get('/', verifyToken, appointmentController.getAppointments);

router.post('/', verifyToken, appointmentController.createAppointment);

router.put('/:id', verifyToken, appointmentController.updateAppointment);

router.delete('/:id', verifyToken, appointmentController.removeAppointment);

module.exports = router;
