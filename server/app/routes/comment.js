import express from "express";
import CommentController from "../controllers/comment.js";
import authenction from "../middleware/auth.js";

const router = express.Router();

const commentController = new CommentController();

router.post("/create", authenction, commentController.createComment);
router.post("/:postId/like", authenction, commentController.likeComment);
router.post("/:postId/unlike", authenction, commentController.unlikeComment);

export default router;
