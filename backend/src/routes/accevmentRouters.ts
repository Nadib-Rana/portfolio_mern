import { Router } from "express";
import router from "./contract.routes";
import { createAcevment, getAccevment } from "../controllers/acevment";

// /api/accevment
const accevmentRouter = Router();

accevmentRouter.route("/")
               .post(createAcevment)
               .get(getAccevment)
export default accevmentRouter