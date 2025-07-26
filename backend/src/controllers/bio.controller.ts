import { Request, Response } from "express";
import BioModel from "../models/bio.model";

// ✅ Create new bio
export const createBio = async (req: Request, res: Response) => {
  try {
    const bio = new BioModel(req.body);
    const savedBio = await bio.save();
    res.status(201).json(savedBio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get all bios
export const getAllBios = async (_req: Request, res: Response) => {
  try {
    const bios = await BioModel.find();
    res.status(200).json(bios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📄 Get bio by ID
export const getBioById = async (req: Request, res: Response) => {
  try {
    const bio = await BioModel.findById(req.params.id);
    if (!bio) return res.status(404).json({ message: "Bio not found" });
    res.status(200).json(bio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update bio
export const updateBio = async (req: Request, res: Response) => {
  try {
    const updatedBio = await BioModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedBio) return res.status(404).json({ message: "Bio not found" });
    res.status(200).json(updatedBio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🗑️ Delete bio
export const deleteBio = async (req: Request, res: Response) => {
  try {
    const deletedBio = await BioModel.findByIdAndDelete(req.params.id);
    if (!deletedBio) return res.status(404).json({ message: "Bio not found" });
    res.status(200).json({ message: "Bio deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};