import express from "express";
import CommentController from "../controllers/comment.js";
import authenction from "../middleware/auth.js";

const router = express.Router();

const commentController = new CommentController();

router.post("/create", authenction, commentController.createComment);
router.post("/:commentId/like", authenction, commentController.likeComment);
router.post("/:commentId/unlike", authenction, commentController.unlikeComment);

export default router;
