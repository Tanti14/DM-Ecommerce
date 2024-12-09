import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userscontrollers.js";

const router = Router();

router.get("/users", authRequired, getUsers);
router.post("/users", authRequired, createUser);
router.put("/users/:id", authRequired, updateUser);
router.delete("/users/:id", authRequired, deleteUser);

export default router;
