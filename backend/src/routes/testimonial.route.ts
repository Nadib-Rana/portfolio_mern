import express from 'express';
import {
  getTestimonials,
  createTestimonial,
  deleteTestimonial,
  updateTestimonial
} from '../controllers/testimonial.controller';

const testimonialRoute = express.Router();

// Public or Admin-only based on access setup
testimonialRoute.get('/', getTestimonials);
testimonialRoute.post('/', createTestimonial);
testimonialRoute.delete('/:id', deleteTestimonial);
testimonialRoute.put('/:id' , updateTestimonial);
export default testimonialRoute ;