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
router.post("/categories", createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

export default router;
