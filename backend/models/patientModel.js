import mongoose from "mongoose";

const PatientSchemas = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    mobileNumber: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true, default: "Male" },
    dateOfBirth: { type: Date, required: true },
    pinCode: { type: String, required: true },
    city: { type: String, required: true },
    bloodGroup: { type: String },
    maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed', 'Other'], default: "Single" },
    height: { type: Number },
    weight: { type: Number },
    bmi: { type: Number },
    alcoholConsumption: { type: Boolean, default: false },
    cigaretteConsumption: { type: Boolean, default: false },
    tobaccoConsumption: { type: Boolean, default: false },
    foodPreference: { type: String, enum: ['Veg', 'Non-Veg'], default: 'Veg' },
    selectSymptoms: [{ type: String }],
    familyHistory: { type: String },
    otherSymptoms: { type: String },
    allergies: { type: String },
    travelInformation: { type: String },
    ongoingMedications: { type: String },
    activeStatus: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ['pending', 'active', 'complete'],
        default: 'pending',
    },
    assignedDoctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        default: "null"
    }],
    assignedNurses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nurse',
        default: "null"
    }],
    hospital: [{
        type: String
    }],
    condition: {
        type: String,
        enum: ["critical", "serious", "stable"],
    }
})



export const Patient = mongoose.model("Patient", PatientSchemas)