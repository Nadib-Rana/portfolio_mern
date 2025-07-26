import { Router } from "express";
import {
  createEdu,
  getAllEdu,
  getEduById,
  updateEdu,
  deleteEdu
} from "../controllers/edu.controller";

const router = Router();

router.post("/", createEdu);
router.get("/", getAllEdu);
router.get("/:id", getEduById);
router.put("/:id", updateEdu);
router.delete("/:id", deleteEdu);

export default router;