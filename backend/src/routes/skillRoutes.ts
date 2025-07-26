import { Router } from "express";
import { createSkill , getSkill , updateSkill, deleteSkill } from "../controllers/skill.controller";

// /api/skill

export const skillRouter = Router();

skillRouter.route("/")
           .post(createSkill)
           .get(getSkill)

skillRouter.route("/:id")
            .put(updateSkill)
            .delete(deleteSkill)
export default skillRouter;