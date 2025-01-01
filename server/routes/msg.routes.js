import { Router } from "express";
import {
  getMessages,
  getMessage,
  sendMessage,
  updateMessageStatus,
  deleteMessage,
} from "../controllers/msgcontrollers.js";

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/messages", getMessages);
router.post("/messages", sendMessage);
router.put("/messages/:id", updateMessageStatus);
router.delete("/messages/:id", deleteMessage);

export default router;
