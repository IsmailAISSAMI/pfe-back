const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
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
    description: {
        type: String,
        required: true,
        trim: true,
    },
    dateIssued: {
        type: Date,
        required: true,
    },
    fileId: {
        type: Schema.Types.ObjectId,
        ref: 'File',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
