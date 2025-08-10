import { Request, Response } from "express";
import ExperticeModel from "../models/expertice.model";

// Create
export const createExpertice = async (req: Request, res: Response) => {
  try {
    const expertice = new ExperticeModel(req.body);
    console.log(expertice);
    const saved = await expertice.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read All
export const getAllExpertice = async (_req: Request, res: Response) => {
  try {
    const data = await ExperticeModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read One
export const getExperticeById = async (req: Request, res: Response) => {
  try {
    const data = await ExperticeModel.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
export const updateExpertice = async (req: Request, res: Response) => {
  try {
    const updated = await ExperticeModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
export const deleteExpertice = async (req: Request, res: Response) => {
  try {
    const deleted = await ExperticeModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};