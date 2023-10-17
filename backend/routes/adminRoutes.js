import express from "express"
const router = express.Router()
import { adminLogin, dashboard } from "../controllers/Admin.js"
import { authenticateJwt } from "../middlewares/authenticate.js"

router.post("/login", adminLogin)
router.post("/dashboard", authenticateJwt, dashboard)

export default router