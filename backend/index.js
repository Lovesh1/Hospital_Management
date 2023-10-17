import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import adminRoutes from "./routes/adminRoutes.js"
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/admin", adminRoutes)

//MongoDB_Connect
mongoose.connect(process.env.MONGO_STRING, { dbName: "GoMedicx" })

app.listen(process.env.PORT, () => {
    console.log("Connected:", process.env.PORT)
})
