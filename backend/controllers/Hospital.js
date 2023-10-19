import { Hospital } from "../models/hospitalModel.js"
import { Patient } from "../models/patientModel.js"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

//GET
export const showAllHospital = async (req, res) => {
    let search = await Hospital.find({})
    res.json(search)
}

//POST
export const createHospital = async (req, res) => {
    let createHospital = await new Hospital(req.body)
    createHospital.save()
    res.json(createHospital)
}

export const hospitalLogin = async (req, res) => {
    let { email, password } = req.body
    let check = await Hospital.findOne({ email, password })
    if (check) {
        let assignJWT = jwt.sign({ email, name: check.name }, process.env.SECRET_CODE)
        res.json({ token: assignJWT, name: check.name })
    } else {
        res.json({ message: "Please provide the correct credentials" })
    }
}

export const patientCreate = async (req, res) => {
    let createPatient = await new Patient(req.body)
    createPatient.save()
    let searched = await Hospital.findOne({ name: req.headers.name })
    console.log(searched)
    if (searched) {
        searched.Patients.push(createPatient._id)
        searched.save()
    }
    res.json({ message: createPatient._id })
}
export const showAllPatients = async (req, res) => {
    let searchData = await Hospital.findOne({ name: req.headers.name })
    res.json(searchData.Patients)
}