const Patient = require('../models/patient.model');

exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('userId');
        if (!patient) {
            return res.status(404).send({ message: 'Patient not found.' });
        }
        res.send(patient);
    } catch (error) {
        console.error('Error fetching patient:', error);
        res.status(500).send({ message: 'Error fetching patient.' });
    }
};

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find().populate('userId');
        res.send(patients);
    } catch (error) {
        console.error('Error fetching patients:', error);
        res.status(500).send({ message: 'Error fetching patients.' });
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPatient) {
            return res.status(404).send({ message: 'Patient not found.' });
        }
        res.send(updatedPatient);
    } catch (error) {
        console.error('Error updating patient:', error);
        res.status(500).send({ message: 'Error updating patient.' });
    }
};

exports.removePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndRemove(req.params.id);
        if (!patient) {
            return res.status(404).send({ message: 'Patient not found.' });
        }
        res.send({ message: 'Patient removed successfully.' });
    } catch (error) {
        console.error('Error removing patient:', error);
        res.status(500).send({ message: 'Error removing patient.' });
    }
};
