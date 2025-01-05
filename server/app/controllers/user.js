import UserService from "../services/user.js";
import { errorResponse, successResponse } from "../utils/responeshelper.js";
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
    const id = req.params.id || req.user.id;
    return UserService.userDetails(id)
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
    return UserService.userList(req.body)
      .then((data) => successResponse(res, "user list", data))
      .catch((error) => errorResponse(res, error));
  }
}

export default UserController;
