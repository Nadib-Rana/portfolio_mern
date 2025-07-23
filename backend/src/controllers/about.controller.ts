import About from '../models/about.model';
import { Request, Response } from 'express';

export const getAbout = async (_req: Request, res: Response) => {
  try {
    const aboutData = await About.find();
    res.status(200).json(aboutData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch about data' });
  }
};

export const createAbout = async (req: Request, res: Response) => {
  try {
    const newAbout = await About.create(req.body);
    res.status(201).json(newAbout);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create section' });
  }
};