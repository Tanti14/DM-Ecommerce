import { Router } from "express";
import { login, logout, verifyToken } from "../controllers/authcontrollers.js";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", verifyToken);

export default router;
