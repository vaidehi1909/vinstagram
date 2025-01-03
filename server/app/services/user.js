import UserModel from "../models/user.js";
import authService from "./auth.js";
import bcrypt from "bcrypt";

const isUserExist = async (emailId) => {
  const exists = await UserModel.exists({ emailId });
  return exists ? true : false;
};

const signup = async (params) => {
  const { password, emailId } = params;

  const isExist = await isUserExist(emailId);
  if (isExist) throw new Error("user alredy exist");

  const hash = authService.generateHashPassword(password);

  return UserModel.create({ ...params, password: hash });
};

const login = async (params) => {
  const { password, emailId } = params;
  try {
    // Find user by email
    const user = await UserModel.findOne({ emailId });
    if (!user) {
      throw new Error("User not found");
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }

    return authService.generateToken(user);
  } catch (error) {
    throw new Error(error);
  }
};

const userDetails = async (userId) => {
  const user = await UserModel.findById(userId).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const resetPassword = async (params) => {
  const { emailId, oldPassword, newPassword } = params;
  const user = await UserModel.findOne({ emailId });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    throw new Error("Invalid old password");
  }

  const hash = authService.generateHashPassword(newPassword);
  user.password = hash;
  return user.save().then(() => {
    return {
      success: true,
    };
  });
};

const UserService = {
  isUserExist,
  signup,
  login,
  userDetails,
  resetPassword,
};

export default UserService;
