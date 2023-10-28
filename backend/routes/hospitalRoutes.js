import express from "express"
const router = express.Router()
import { hospitalLogin, createHospital, createDoctor, createNurse, createPatient, showAllHospital, showAllPatients, showDashboard, showDoctors, showNurses } from "../controllers/Hospital.js"
import { authenticateJwt } from "../middlewares/authenticate.js"

//Show -> GET // Create-POST  //Login ->POST
router.post("/login", hospitalLogin)
router.get("/show", showAllHospital)
router.get("/dashboard", authenticateJwt, showDashboard)
router.get("/show-patients", authenticateJwt, showAllPatients)
router.get("/show-doctors", authenticateJwt, showDoctors)
router.get("/show-nurses", authenticateJwt, showNurses)
//Creating Hospital and providing the id and password to be given
router.post("/create-hospital", createHospital)
router.post("/create-patient", authenticateJwt, createPatient)
router.post("/create-doctor", authenticateJwt, createDoctor)
router.post("/create-nurse", authenticateJwt, createNurse)

export default router