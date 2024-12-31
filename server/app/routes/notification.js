import express from "express";
import authenction from "../middleware/auth.js";
import NotificationController from "../controllers/notification.js";
const router = express.Router();

const notificationController = new NotificationController();

router.get("/list", authenction, notificationController.notificationList);
router.post("/mark-read", authenction, notificationController.markAsRead);

export default router;
