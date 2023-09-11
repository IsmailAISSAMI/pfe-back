const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
        match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'canceled'],
        default: 'scheduled',
    },
    consultationType: {
        type: String,
        enum: ['in-person', 'video'],
        required: true,
    },
    videoLink: {
        type: String,
        trim: true,
    },
    videoToken: {
        type: String,
        select: false,
    },
    notes: {
        type: String,
        trim: true,
    },
    prescriptionId: {
        type: Schema.Types.ObjectId,
        ref: 'Prescription',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
