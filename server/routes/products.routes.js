import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/prodscontrollers.js";

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", authRequired, getProduct);
router.post("/products", authRequired, createProduct);
router.put("/products/:id", authRequired, updateProduct);
router.delete("/products/:id", authRequired, deleteProduct);

export default router;
