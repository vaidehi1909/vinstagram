import express from "express";
import PostController from "../controllers/post.js";
import authenction from "../middleware/auth.js";
import { multiUpload } from "../middleware/multer.js";

const router = express.Router();

const postController = new PostController();

router.get("/search", authenction, postController.postList);
router.get("/feed", authenction, postController.postFeed);
router.get("/user/me", authenction, postController.currentUserPosts);
router.get("/user/:userId", authenction, postController.userPosts);
router.get("/:postId/comments", authenction, postController.postComments);
router.get("/:postId", authenction, postController.postDetails);

router.post("/create", authenction, multiUpload, postController.createPost);
router.post("/:postId/like", authenction, postController.likePost);
router.post("/:postId/unlike", authenction, postController.unlikePost);

export default router;
