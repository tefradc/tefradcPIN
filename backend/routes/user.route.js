import express from "express";
import { test } from "../controllers/user.controller.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { getUser } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/test", test);
router.get("/:username", getUser);
export default router;
