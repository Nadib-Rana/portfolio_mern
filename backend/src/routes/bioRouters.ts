import { Router } from "express";
import {createBio,getAllBios,getBioById,updateBio,deleteBio} from "../controllers/bio.controller";

// /api/bio
const bioRouter = Router();

bioRouter.route ("/")
          .post( createBio)
          .get( getAllBios);

bioRouter.route ("/id")
          .post( getBioById)
          .put( updateBio)
          .delete( deleteBio);

export default bioRouter;