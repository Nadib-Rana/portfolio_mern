import { Express, Router } from "express";
import { createAbout ,getAbout  } from "../controllers/about.controller";

const aboutRoutes = Router();

aboutRoutes.get("/" , getAbout);
aboutRoutes.post("/", createAbout);

export default aboutRoutes;
