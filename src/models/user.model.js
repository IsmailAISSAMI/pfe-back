const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/, // Email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ['admin', 'doctor', 'patient'],
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    phoneNumber: {
        type: String,
        trim: true,
        unique: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});


module.exports = mongoose.model('User', userSchema);

