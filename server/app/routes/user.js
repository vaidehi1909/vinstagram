import express from 'express';
import UserController from "../controllers/user.js";
import authenction from "../middleware/auth.js";
const router = express.Router();

const userController = new UserController();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/me", authenction, userController.userDetails);
router.get("/:id", userController.userDetails);

router.post("/reset-password", authenction, userController.resetPassword);
router.post("/search", authenction, userController.userList);



export default router;