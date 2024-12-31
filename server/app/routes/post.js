import express from "express";
import PostController from "../controllers/post.js";
import authenction from "../middleware/auth.js";
import { multiUpload } from "../middleware/multer.js";

const router = express.Router();

const postController = new PostController();

router.get("/list", authenction, postController.postList);
router.get("/me", authenction, postController.userPosts);
router.get("/feed", authenction, postController.userFeed);

router.post("/create", authenction, multiUpload, postController.createPost);

export default router;
