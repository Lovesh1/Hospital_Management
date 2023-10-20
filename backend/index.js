import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import hospitalRoutes from "./routes/hospitalRoutes.js"
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/hospital", hospitalRoutes)

//MongoDB_Connect
mongoose.connect(process.env.MONGO_STRING, { dbName: "GoMedicxTest" })

app.listen(process.env.PORT, () => {
    console.log("Connected:", process.env.PORT)
})
