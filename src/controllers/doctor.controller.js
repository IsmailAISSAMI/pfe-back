const Doctor = require('../models/doctor.model');

exports.getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate('userId');
        if (!doctor) {
            return res.status(404).send({ message: 'Doctor not found.' });
        }
        res.send(doctor);
    } catch (error) {
        console.error('Error fetching doctor:', error);
        res.status(500).send({ message: 'Error fetching doctor.' });
    }
};

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().populate('userId');
        res.send(doctors);
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).send({ message: 'Error fetching doctors.' });
    }
};

exports.updateDoctor = async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDoctor) {
            return res.status(404).send({ message: 'Doctor not found.' });
        }
        res.send(updatedDoctor);
    } catch (error) {
        console.error('Error updating doctor:', error);
        res.status(500).send({ message: 'Error updating doctor.' });
    }
};

exports.removeDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndRemove(req.params.id);
        if (!doctor) {
            return res.status(404).send({ message: 'Doctor not found.' });
        }
        res.send({ message: 'Doctor removed successfully.' });
    } catch (error) {
        console.error('Error removing doctor:', error);
        res.status(500).send({ message: 'Error removing doctor.' });
    }
};
