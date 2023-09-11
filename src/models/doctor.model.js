const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Doctor Schema (extends User)
const doctorSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // Creates an index on this field for efficient queries
    },
    // Specialty of the doctor, such as "Cardiology", "Dermatology", "Pediatrics", etc.
    // This refers to the specific area of medicine that the doctor is trained and specialized in.
    // Typically, a doctor has one primary specialty, which is why it's represented as a single string in the model
    specialty: {
      type: String,
      trim: true,
    },
    // List of the doctor's educational and training credentials.
    // Can include degrees, diplomas, certifications, etc.
    // Example value: [
    //     "Diplôme d'État de Docteur en Médecine", // The primary medical degree in France
    //     "DES de Cardiologie", // Specialized diploma in Cardiology
    // ]
    qualifications: {
      type: [String],
    },
    yearsOfExperience: {
      type: Number,
      min: 0,
    },
    clinicAddress: {
      type: String,
      trim: true,
    },
    consultationFee: {
      type: Number,
      min: 0, 
    },
    // Indicates whether the doctor's account has been verified and approved by the platform
    verified: {
      type: Boolean,
      default: false,
    },
    // Available consultation times for the doctor, an array of objects
    availableTimes: [
      {
        day: {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        startTime: {
          type: String,
          match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
        },
        endTime: {
          type: String,
          match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
        },
        // Intervals between appointments, in minutes (e.g. 30 minutes)
        interval: {
          type: Number, // in minutes
          default: 30,
        },
        // Break times for the doctor during their available hours
        breaks: [
          {
            start: {
              type: String,
              match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
            },
            end: {
              type: String,
              match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
            },
          },
        ],
      },
    ],
    givenPrescriptions: [{
        type: Schema.Types.ObjectId,
        ref: 'Prescription',
    }],
    offersVideoConsultation: {
        type: Boolean,
        default: false,
    },
    videoConsultationSettings: {
        platform: {
            type: String,
            enum: ['Zoom', 'Twilio', 'WebRTC', 'Other'],
        },
        preferences: {
            type: String,
            trim: true,
        },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);
