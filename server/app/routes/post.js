import express from "express";
import PostController from "../controllers/post.js";
import authenction from "../middleware/auth.js";
import { multiUpload } from "../middleware/multer.js";

const router = express.Router();

const postController = new PostController();

router.post("/create", authenction, multiUpload, postController.createPost);

export default router;
