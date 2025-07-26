import { Router } from "express";
import { chatWithBot } from "../controllers/aichat.controller";

const router = Router();

router.post("/", chatWithBot);

export default router;