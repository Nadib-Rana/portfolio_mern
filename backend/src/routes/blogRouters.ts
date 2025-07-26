import { Router } from "express";
import { createBlog, getBlog , updatBlog ,deleteBlog } from "../controllers/blog.controllers";


// /api/blog
const blogRouter = Router();

blogRouter.route("/")
          .post(createBlog)
          .get(getBlog)
blogRouter.route("/:id")
          .put(updatBlog)
          .delete(deleteBlog)

export default blogRouter;