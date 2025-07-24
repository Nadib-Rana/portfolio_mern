import IitModel from '../models/it.model';
import { Request, Response } from 'express';

//  Get All IT Entries
export const getAllIIT = async (req: Request, res: Response) => {
  try {
    const entries = await IitModel.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch IIT entries' });
  }
};

//  Get Single IT by ID
export const getIITById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const entry = await IitModel.findById(id);
    if (!entry) {
      return res.status(404).json({ error: 'IIT entry not found' });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching IIT entry by ID' });
  }
};

//  Create New IIT Entry
export const createIIT = async (req: Request, res: Response) => {
  try {
    const newEntry = await IitModel.create(req.body);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create IIT entry' });
  }
};

//  Update IIT Entry
export const updateIIT = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedEntry = await IitModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEntry) {
      return res.status(404).json({ error: 'IIT entry not found for update' });
    }
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update IIT entry' });
  }
};

//  Delete IIT Entry
export const deleteIIT = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedEntry = await IitModel.findByIdAndDelete(id);
    if (!deletedEntry) {
      return res.status(404).json({ error: 'IIT entry not found for deletion' });
    }
    res.status(200).json({ message: 'IIT entry deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete IIT entry' });
  }
};