import { Router } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoriescontrollers.js";

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/categories", getCategories);
router.post("/categories", authRequired, createCategory);
router.put("/categories/:id", authRequired, updateCategory);
router.delete("/categories/:id", authRequired, deleteCategory);

export default router;
