import express from 'express';
import UserController from "../controllers/user.js";
import authenction from "../middleware/auth.js";
import { upload } from "../middleware/multer.js";
const router = express.Router();

const userController = new UserController();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/me", authenction, userController.userDetails);
router.get("/:id", authenction, userController.userDetails);

router.post("/reset-password", authenction, userController.resetPassword);
router.post("/search", authenction, userController.userList);
router.post(
  "/profile-image",
  authenction,
  upload,
  userController.updateProfileImage
);

router.patch("/profile", authenction, userController.updateUserProfile);

router.delete("/profile-image", authenction, userController.deleteProfileImage);




export default router;