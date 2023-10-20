import mongoose from "mongoose";

let hospitalSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        immutable: true,
    },
    Doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    }],
    Nurses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nurse"
    }],
    totalIncome: {
        type: Number,
        default: 0
    },
    totalRevenue: {
        type: Number,
        default: 0
    },
    Patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    }],
})


export const Hospital = mongoose.model("Hospital", hospitalSchema)