import mongoose from "mongoose";

const AdminSchemas = new mongoose.Schema({
    email: { type: String },
    password: { type: String }
})

export const Admin = mongoose.model("Admin", AdminSchemas, "Admin")