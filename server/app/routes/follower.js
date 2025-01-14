import express from "express";
import authenction from "../middleware/auth.js";
import FollowerController from "../controllers/folllower.js";
import { ro } from "@faker-js/faker";
const router = express.Router();

const followerController = new FollowerController();

router.post(
  "/:followingId/request",
  authenction,
  followerController.followRequest
);
router.patch("/:followerId/accept", authenction, followerController.accept);
router.post("/:followerId/reject", authenction, followerController.reject);
router.post("/:followingId/unfollow", authenction, followerController.unfollow);

router.get("/request/list", authenction, followerController.requestList);
router.get("/suggestions", authenction, followerController.suggestions);

router.get(
  "/list/:userid/followers",
  authenction,
  followerController.followerlist
);
router.get(
  "/list/:userid/following",
  authenction,
  followerController.followinglist
);

export default router;
