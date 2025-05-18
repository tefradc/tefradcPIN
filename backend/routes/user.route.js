import express from "express";
import { test } from "../controllers/user.controller.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
const router = express.Router();

router.get("/test", test);
export default router;
