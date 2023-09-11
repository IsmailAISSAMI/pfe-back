const Prescription = require('../models/prescription.model');

exports.getPrescription = async (req, res) => {
    try {
        const prescription = await Prescription.findById(req.params.id).populate(['doctorId', 'patientId']);
        if (!prescription) {
            return res.status(404).send({ message: 'Prescription not found.' });
        }
        res.send(prescription);
    } catch (error) {
        console.error('Error fetching prescription:', error);
        res.status(500).send({ message: 'Error fetching prescription.' });
    }
};

exports.getPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find().populate(['doctorId', 'patientId']);
        res.send(prescriptions);
    } catch (error) {
        console.error('Error fetching prescriptions:', error);
        res.status(500).send({ message: 'Error fetching prescriptions.' });
    }
};

exports.createPrescription = async (req, res) => {
    try {
        const prescription = new Prescription(req.body);
        await prescription.save();
        res.status(201).send(prescription);
    } catch (error) {
        console.error('Error creating prescription:', error);
        res.status(500).send({ message: 'Error creating prescription.' });
    }
};

exports.updatePrescription = async (req, res) => {
    try {
        const updatedPrescription = await Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPrescription) {
            return res.status(404).send({ message: 'Prescription not found.' });
        }
        res.send(updatedPrescription);
    } catch (error) {
        console.error('Error updating prescription:', error);
        res.status(500).send({ message: 'Error updating prescription.' });
    }
};

exports.removePrescription = async (req, res) => {
    try {
        const prescription = await Prescription.findByIdAndRemove(req.params.id);
        if (!prescription) {
            return res.status(404).send({ message: 'Prescription not found.' });
        }
        res.send({ message: 'Prescription removed successfully.' });
    } catch (error) {
        console.error('Error removing prescription:', error);
        res.status(500).send({ message: 'Error removing prescription.' });
    }
};
