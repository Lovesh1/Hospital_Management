import express from "express"
const router = express.Router()
import { createHospital, hospitalLogin, patientCreate, showAllHospital, showAllPatients } from "../controllers/Hospital.js"
import { authenticateJwt } from "../middlewares/authenticate.js"


router.post("/login", hospitalLogin)
router.post("/create-hospital", createHospital)

router.post("/patient-create", authenticateJwt, patientCreate)
router.get("/checkdata", showAllHospital)
router.get("/show-patients", authenticateJwt, showAllPatients)

export default router