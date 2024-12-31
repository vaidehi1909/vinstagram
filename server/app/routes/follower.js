import express from "express";
import authenction from "../middleware/auth.js";
import FollowerController from "../controllers/folllower.js";
const router = express.Router();

const followerController = new FollowerController();

router.post(
  "/:followingId/request",
  authenction,
  followerController.followRequest
);
router.patch("/:followerId/accept", authenction, followerController.accept);
router.post("/:followerId/reject", authenction, followerController.reject);
router.get("/request/list", authenction, followerController.requestList);
router.get("/suggestions", authenction, followerController.suggestions);

export default router;
