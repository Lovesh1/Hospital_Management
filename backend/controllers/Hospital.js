import { Hospital } from "../models/hospitalModel.js"
import { Nurse } from "../models/nursesModel.js"
import { Doctor } from "../models/doctorsModel.js"
import { Patient } from "../models/patientModel.js"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

//Login
export const hospitalLogin = async (req, res) => {
    let { email, password } = req.body
    let check = await Hospital.findOne({ email, password })
    if (check) {
        let assignJWT = jwt.sign({ email, name: check.name, _id: check._id }, process.env.SECRET_CODE)
        res.json({ token: assignJWT, name: check.name, _id: check._id })
    } else {
        res.json({ message: "Please provide the correct credentials" })
    }
}
export const showAllHospital = async (req, res) => {
    let search = await Hospital.find({})
    res.json(search)
}
export const showAllPatients = async (req, res) => {
    let searchData = await Hospital.findOne({ name: req.headers.name })
    res.json(searchData.Patients)
}

export const showDoctors = async (req, res) => {
    let searched = await Hospital.findById(req.headers._id)
    if (searched) {
        const doctorPromises = searched.Doctors.map((doctorId) => {
            return Doctor.findById(doctorId).select("firstName lastName")
        });
        const searchedData = await Promise.all(doctorPromises)

        res.json({ searchedData });
    } else {
        res.json("Hospital is not valid")
    }
}
export const showNurses = async (req, res) => {
    let searched = await Hospital.findById(req.headers._id)
    if (searched) {
        const nursePromises = searched.Nurses.map((nurseId) => {
            return Nurse.findById(nurseId).select("firstName lastName")
        })
        const searchedData = await Promise.all(nursePromises)
        res.json({ Nurses: searchedData })
    }
}

export const showDashboard = async (req, res) => {
    try {
        const searched = await Hospital.findById(req.headers._id);
        if (!searched) {
            return res.status(404).json({ error: 'Hospital not found' });
        }

        const patientIds = searched.Patients;
        const dataFetch = await Patient.find({ _id: { $in: patientIds } })
            .select('activeStatus status')

        const dashboardData = dataFetch.reduce(
            (acc, patient) => {
                if (patient.activeStatus) {
                    acc.ActiveCareUsers++;
                }
                if (patient.status === 'active') {
                    acc.ActiveRequest++;
                }
                if (patient.status === 'complete') {
                    acc.CompleteRequest++;
                }
                if (patient.status === 'pending') {
                    acc.PendingRequest++;
                }
                return acc;
            },
            {
                ActiveRequest: 0,
                ActiveCareUsers: 0,
                CompleteRequest: 0,
                PendingRequest: 0,
            }
        );

        const response = {
            'Total Doctor': searched.Doctors.length,
            'Total Patient': searched.Patients.length,
            'Total Nurse': searched.Nurses.length,
            'Pending Request': dashboardData.PendingRequest,
            'Complete Request': dashboardData.CompleteRequest,
            'Active Request': dashboardData.ActiveRequest,
            'Active Care Users': dashboardData.ActiveCareUsers,
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};





//Creation Starts Here
export const createHospital = async (req, res) => {
    let createHospital = await new Hospital(req.body)
    createHospital.save()
    res.json(createHospital)
}
export const createPatient = async (req, res) => {
    try {
        const createPatient = new Patient(req.body);
        await createPatient.save();
        const searched = await Hospital.findById(req.headers._id);
        if (searched) {
            searched.Patients.push(createPatient._id)
            await searched.save()
            createPatient.hospital.push(req.headers._id)
            await createPatient.save()
            res.json({ createdPatient: createPatient._id })
        } else {
            res.status(404).json({ message: "Hospital not found" });
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Error while connecting" });
    }
}

export const createDoctor = async (req, res) => {
    try {
        const createDoctor = new Doctor(req.body);
        await createDoctor.save();
        const searched = await Hospital.findById(req.headers._id);
        if (searched) {
            searched.Doctors.push(createDoctor._id);
            await searched.save();
            createDoctor.hospital.push(req.headers._id);
            await createDoctor.save();
            res.json({ message: createDoctor._id });
        } else {
            res.status(404).json({ error: "Hospital not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};


export const createNurse = async (req, res) => {
    let createNurse = await new Nurse(req.body)
    createNurse.save()
    let searched = await Hospital.findById(req.headers._id)
    if (searched) {
        searched.Nurses.push(createNurse._id)
        await searched.save()
        createNurse.hospital.push(req.headers._id)
        await createNurse.save()
    }
    res.json({ message: createNurse._id })
}
