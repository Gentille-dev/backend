import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import loginRoute from "./loginRoute.js"
import messageRoute from "./messageRoute.js"

const router = express.Router()
//all routes

router.use("/blogs", blogRoute)
router.use("/signup", signupRoute)
router.use("/login", loginRoute)
router.use("/message", messageRoute)


export default router