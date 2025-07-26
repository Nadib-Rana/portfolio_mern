import { Request, Response } from "express";
import EduModel from "../models/Edu.model";

//  Create education record
export const createEdu = async (req: Request, res: Response) => {
  
   
    console.log("Hit for create Edu");

    try {
    const edu = new EduModel(req.body);
    const saved = await edu.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Get all records
export const getAllEdu = async (_req: Request, res: Response) => {
    console.log("Hit for get Edu");
  try {
    const eduList = await EduModel.find();
    res.status(200).json(eduList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get one by ID
export const getEduById = async (req: Request, res: Response) => {
    console.log("Hit for get Edu id");

  try {
    const edu = await EduModel.findById(req.params.id);
    if (!edu) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(edu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update record
export const updateEdu = async (req: Request, res: Response) => {
    console.log("Hit for update Edu (id)");

  try {
    const updated = await EduModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Delete record
export const deleteEdu = async (req: Request, res: Response) => {
    console.log("Hit for delete Edu (id)");

  try {
    const deleted = await EduModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Record not found" });
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};