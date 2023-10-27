import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    hospital: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    specialty: [{
        type: String,
    }],
    licenseNumber: {
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
    patientAppointments: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        }
    }],
});

export const Doctor = mongoose.model("Doctor", doctorSchema);


//Degree and Training 