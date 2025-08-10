import { Router } from "express";
import {
  createExpertice,
  getAllExpertice,
  getExperticeById,
  updateExpertice,
  deleteExpertice,
} from "../controllers/expertice.controller";

const experticeRouter = Router();

// Base route: /api/expertice
experticeRouter
  .route("/")
  .get(getAllExpertice)          
  .post(createExpertice); 

experticeRouter
  .route("/:id")
  .get(getExperticeById)          
  .put( updateExpertice)   
  .delete(deleteExpertice);      

export default experticeRouter;