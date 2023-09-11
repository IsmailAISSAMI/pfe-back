const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Patient Schema (extends User)
const patientSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
    // (Numero de sécurité sociale)
    socialSecurityNumber: {
        type: String,
        unique: true,
        match: /^\d{15}$/, // Basic validation for 15 numeric characters
    },
    medicalHistory: [{
        condition: {
            type: String,
            trim: true,
        },
        dateDiagnosed: {
            type: Date,
        }
    }],
    allergies: [{
        allergen: {
            type: String,
            trim: true,
        },
        reaction: {
            type: String,
            trim: true,
        }
    }],
    prescriptions: [{
        type: Schema.Types.ObjectId,
        ref: 'Prescription',
    }],
    emergencyContact: {
        name: String,
        phoneNumber: String,
        relationship: String
    },
    videoConsultationPreferences: {
        preferredPlatform: {
            type: String,
            enum: ['Zoom', 'Twilio', 'WebRTC', 'Other'],
        },
        settings: {
            type: String,
            trim: true,
        }
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Patient', patientSchema);
