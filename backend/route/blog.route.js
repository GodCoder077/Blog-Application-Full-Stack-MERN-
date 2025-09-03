import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
import { createBlog, updateBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.route("/").post(isAuthenticated, createBlog);
router.route("/:blogId").put(isAuthenticated, singleUpload, updateBlog);

export default router;