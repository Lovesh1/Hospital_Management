import mongoose from "mongoose";

const nurseSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    licenseNumber: {
        type: String,
        required: true,
    },
    hospital: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    }],
    department: {
        type: String,
    },
    contact: {
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zipcode: {
            type: String,
        },
    },
    assigned: [{
        Patients: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        },
        Doctors: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        }
    }],
    shiftSchedule: [{
        day: {
            type: String,
            required: true,
        },
        shift: {
            type: String,
            enum: ["Morning", "Afternoon", "Night"],
            required: true,
        },
    }],
    trainingAndCertifications: [{
        title: {
            type: String,
        },
        institution: {
            type: String,
        },
        completionDate: {
            type: Date,
        },
    }],
});

export const Nurse = mongoose.model("Nurse", nurseSchema);
