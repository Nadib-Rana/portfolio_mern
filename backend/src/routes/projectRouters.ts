import { Router } from "express";
import {
  getProjects,
  getProjectById,
  searchProject,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller";

const projectRouter = Router();

//  GET all projects & CREATE new
projectRouter.route("/")
  .get(getProjects)
  .post(createProject);

//  SEARCH by title (e.g., /api/projects/search?keyword=MERN)
projectRouter.route("/search").get(searchProject);

//  GET, UPDATE, DELETE project by ID
projectRouter.route("/:id")
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

export default projectRouter;