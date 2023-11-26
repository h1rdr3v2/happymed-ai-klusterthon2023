import { Router } from "express";
const router = Router();

// IMPORT CONTROLLERS
import { chat } from "../controllers/chatController.js";

router.post("/query", chat);

export default router;
