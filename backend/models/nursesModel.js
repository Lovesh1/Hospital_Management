import mongoose from "mongoose";

const nurseSchema = mongoose.Schema({
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
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
        
    },
    hospital: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        
    }],
    department: {
        type: String,
    },
    contact: {
        email: {
            type: String,
            
        },
        phone: {
            type: String,
            
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
            
        },
        shift: {
            type: String,
            enum: ["Morning", "Afternoon", "Night"],
            
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


//doctor-> nurse 