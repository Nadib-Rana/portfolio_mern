import { Request, Response } from "express";
import { Contract } from "../models/contract.Model";

// Create
export const createContract = async (req: Request, res: Response) => {
  try {
    const newContract = await Contract.create(req.body);
    res.status(201).json(newContract);
  } catch (err) {
    res.status(400).json({ error: "Failed to create contract", details: err });
  }
};

// Read All
export const getContracts = async (_req: Request, res: Response) => {
  try {
    const contracts = await Contract.find();
    res.status(200).json(contracts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contracts", details: err });
  }
};

// Read Single
export const getContractById = async (req: Request, res: Response) => {
  try {
    const contract = await Contract.findById(req.params.id);
    if (!contract) return res.status(404).json({ error: "Contract not found" });
    res.status(200).json(contract);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contract", details: err });
  }
};

// Update
export const updateContract = async (req: Request, res: Response) => {
  try {
    const updated = await Contract.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: "Contract not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update contract", details: err });
  }
};

// Delete
export const deleteContract = async (req: Request, res: Response) => {
  try {
    const deleted = await Contract.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Contract not found" });
    res.status(200).json({ message: "Contract deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete contract", details: err });
  }
};