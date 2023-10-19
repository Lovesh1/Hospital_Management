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
        ref: "Doctors",
    }],
    Nurses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nurses"
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
        ref: "Patient_Data",
    }],
})


export const Hospital = mongoose.model("Hopsital", hospitalSchema)