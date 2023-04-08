import express from 'express'
import { getUser } from '../controllers/general.js'

const router = express.Router() // Create router

router.get("/user/:id", getUser) // GET user by id

export default router
