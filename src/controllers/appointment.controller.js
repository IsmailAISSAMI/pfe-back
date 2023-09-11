const Appointment = require('../models/appointment.model');

exports.getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id).populate(['doctorId', 'patientId']);
        if (!appointment) {
            return res.status(404).send({ message: 'Appointment not found.' });
        }
        res.send(appointment);
    } catch (error) {
        console.error('Error fetching appointment:', error);
        res.status(500).send({ message: 'Error fetching appointment.' });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate(['doctorId', 'patientId']);
        res.send(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).send({ message: 'Error fetching appointments.' });
    }
};

exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).send(appointment);
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).send({ message: 'Error creating appointment.' });
    }
};

exports.updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAppointment) {
            return res.status(404).send({ message: 'Appointment not found.' });
        }
        res.send(updatedAppointment);
    } catch (error) {
        console.error('Error updating appointment:', error);
        res.status(500).send({ message: 'Error updating appointment.' });
    }
};

exports.removeAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndRemove(req.params.id);
        if (!appointment) {
            return res.status(404).send({ message: 'Appointment not found.' });
        }
        res.send({ message: 'Appointment removed successfully.' });
    } catch (error) {
        console.error('Error removing appointment:', error);
        res.status(500).send({ message: 'Error removing appointment.' });
    }
};
