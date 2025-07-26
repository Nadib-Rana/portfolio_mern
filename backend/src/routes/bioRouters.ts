import { Router } from "express";
import {
  createBio,
  getAllBios,
  getBioById,
  updateBio,
  deleteBio,
} from "../controllers/bio.controller";

const router = Router();

// 🔧 Create a new bio
router.post("/", createBio);

// 📄 Get all bios
router.get("/", getAllBios);

// 🔍 Get a specific bio by ID
router.get("/:id", getBioById);

// ✏️ Update bio by ID
router.put("/:id", updateBio);

// 🗑️ Delete bio by ID
router.delete("/:id", deleteBio);

export default router;