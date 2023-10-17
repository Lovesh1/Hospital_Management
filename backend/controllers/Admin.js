import { Admin } from "../models/admin.js"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()


export const adminLogin = async (req, res) => {
    let { email, password } = req.body
    let check = await Admin.find({ email, password })
    console.log(req.body)
    if (check.length > 0) {
        let assignJWT = jwt.sign({ email }, process.env.SECRET_CODE, {
            expiresIn: "1h"
        })
        res.json({ token: assignJWT })
    } else {
        res.json({ message: "Please provide the correct credentials" })
    }
}

export const dashboard = async (req, res) => {
    
}