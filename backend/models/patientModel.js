import mongoose from "mongoose";

const PatientSchemas = new mongoose.Schema({
    name: { type: String, required: true },
    patientId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    dateOfBirth: { type: Date, required: true },
    pinCode: { type: String, required: true },
    city: { type: String, required: true },
    bloodGroup: { type: String },
    maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed', 'Other'] },
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
    activeStatus: { type: Boolean, default: false }
})


export const Patient = mongoose.model("Patient_Data", PatientSchemas)