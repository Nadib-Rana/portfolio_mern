import skillModel from "../models/skill.model";
import { Request, Response } from "express";

//  Get All Skills
export const getSkill = async (req: Request, res: Response) => {
  try {
    const skills = await skillModel.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch skills" });
  }
};

//  Get Skill by ID
export const getSkillById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const skill = await skillModel.findById(id);
    if (!skill) {
      return res.status(404).json({ error: "Skill not found" });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch skill" });
  }
};

//  Search Skills (by name)
export const searchSkill = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query;
    const skills = await skillModel.find({
      name: { $regex: keyword, $options: "i" },
    });
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json({ error: "Search failed" });
  }
};

//  Create New Skill (with Duplicate Check)
export const createSkill = async (req: Request, res: Response) => {
  try {
    const existingSkill = await skillModel.findOne({ name: req.body.name });
    if (existingSkill) {
      return res.status(409).json({ error: "Skill already exists" });
    }
    const newSkill = await skillModel.create(req.body);
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ error: "Failed to create skill" });
  }
};

// ✏️ Update Skill
export const updateSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedSkill = await skillModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSkill) {
      return res.status(404).json({ error: "Skill not found" });
    }
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(400).json({ error: "Failed to update skill" });
  }
};

// 🗑️ Delete Skill
export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedSkill = await skillModel.findByIdAndDelete(id);
    if (!deletedSkill) {
      return res.status(404).json({ error: "Skill not found" });
    }
    res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete skill" });
  }
};

// 🧯 Central Error Middleware (optional)
export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: Function
) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
};