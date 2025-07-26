import { Request, Response } from "express";
import projectModel from "../models/project.model";

// 📄 Get All Projects
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

//  Get Project By ID
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch project" });
  }
};

//  Search Projects (by title)
export const searchProject = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query;
    const projects = await projectModel.find({
      title: { $regex: keyword, $options: "i" },
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
};

//  Create New Project
export const createProject = async (req: Request, res: Response) => {
 
  try {
    const newProject = await projectModel.create(req.body)
    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Project creation failed" });
  }
};

// Update Project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProject = await projectModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: "Failed to update project" });
  }
};

//  Delete Project
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProject = await projectModel.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete project" });
  }
};