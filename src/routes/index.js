const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const usersRouter = require('./users.route');
const doctorsRouter = require('./doctors.route');
const patientsRouter = require('./patients.route');
const appointmentsRouter = require('./appointments.route');
const prescriptionsRouter = require('./prescriptions.route');
const filesRouter = require('./files.route');

router.use('/auth', authRouter);

router.use('/users', usersRouter);
router.use('/doctors', doctorsRouter);
router.use('/patients', patientsRouter);

router.use('/appointments', appointmentsRouter);
router.use('/prescriptions', prescriptionsRouter);
router.use('/files', filesRouter);

// WEBHOOKS MIDDLEWARE
router.use("/api/webhooks/stripe", express.raw({ type: "*/*" }));

module.exports = router;