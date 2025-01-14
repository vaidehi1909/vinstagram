import UserService from "../services/user.js";
import { errorResponse, successResponse } from "../utils/responseHelper.js";
import validationService from "../utils/validationService.js";

class UserController {
  async signup(req, res, next) {
    const requiredParams = ["userName", "password", "emailId", "fullName"];
    validationService.validateParams(req.body, requiredParams);

    return UserService.signup(req.body)
      .then(() => {
        successResponse(res, "user created successfully");
      })
      .catch((error) => errorResponse(res, error));
  }

  async login(req, res, next) {
    const requiredParams = ["emailId", "password"];
    validationService.validateParams(req.body, requiredParams);

    return UserService.login(req.body)
      .then((data) => successResponse(res, "login succesfully done", data))
      .catch((error) => errorResponse(res, error));
  }

  async userDetails(req, res, next) {
    const currentUserId = req.user.id;
    const id = req.params.id || currentUserId;
    return UserService.userDetails(id, currentUserId)
      .then((data) => successResponse(res, "user details", data))
      .catch((error) => errorResponse(res, error));
  }

  async resetPassword(req, res, next) {
    const requiredParams = ["emailId", "oldPassword", "newPassword"];
    validationService.validateParams(req.body, requiredParams);

    return UserService.resetPassword(req.body)
      .then((data) => successResponse(res, "Password reset successfully", data))
      .catch((error) => errorResponse(res, error));
  }

  async userList(req, res, next) {
    return UserService.userList({ ...req.body, userId: req.user.id })
      .then((data) => successResponse(res, "user list", data))
      .catch((error) => errorResponse(res, error));
  }

  async updateProfileImage(req, res, next) {
    const userId = req.user.id;
    return UserService.updateProfileImage(userId, req.file)
      .then((data) => successResponse(res, "User profile imgage updated", data))
      .catch((error) => errorResponse(res, error));
  }

  async deleteProfileImage(req, res, next) {
    const userId = req.user.id;
    return UserService.deleteProfileImage(userId)
      .then((data) => successResponse(res, "User profile imgage deleted", data))
      .catch((error) => errorResponse(res, error));
  }

  async updateUserProfile(req, res, next) {
    const params = { ...req.body, userId: req.user.id };
    // validationService.validateParams(params, requiredParams);

    return UserService.updateUserProfile(params)
      .then((data) =>
        successResponse(res, "User profile details updated", data)
      )
      .catch((error) => errorResponse(res, error));
  }
}

export default UserController;
