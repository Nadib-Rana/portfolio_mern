import { Request, Response } from 'express';
import Testimonial from '../models/testimonial.model';

//  GET all testimonials
export const getTestimonials = async (req: Request, res: Response) => {

    console.log("Hit for get testimonials");

  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch testimonials', error });
  }
};

//  POST new testimonial
export const createTestimonial = async (req: Request, res: Response) => {
    console.log("Hit for create testimonials");

  try {
    const newTestimonial = new Testimonial(req.body);
    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create testimonial', error });
  }
};

//  DELETE testimonial by ID
export const deleteTestimonial = async (req: Request, res: Response) => {

    console.log("Hit for Delete testimonials");

  try {
    const { id } = req.params;
    const deleted = await Testimonial.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(404).json({ message: 'Failed to delete testimonial', error });
  }
};


//  UPDATE testimonial by ID
export const updateTestimonial = async (req: Request, res: Response) => {
    
    console.log("Hit for update testimonials");


  try {
    const { id } = req.params;
    const updates = req.body;

    const updated = await Testimonial.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update testimonial', error });
  }
};