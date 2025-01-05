import FollowerModel from "../models/follower.js";
import PostModel from "../models/post.js";
import UserModel from "../models/user.js";
import BaseQueryBuilder from "../utils/baseQueryBuilder.js";
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
  let user = await UserModel.findById(userId).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  const [followers, following, post] = await Promise.all([
    FollowerModel.find({ following: userId }).countDocuments(),
    FollowerModel.find({ follower: userId }).countDocuments(),
    PostModel.find({ user: userId }).countDocuments(),
  ]);
  user = user.toObject();
  user.followersCount = followers;
  user.followingCount = following;
  user.postCount = post;
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

const getRecords = (params) => {
  const queryBuilder = new BaseQueryBuilder(UserModel, params);
  return queryBuilder.build();
};

const userList = async (params) => {
  const { search } = params;
  const filters = {};
  if (search) {
    filters.$or = [
      { fullName: { $regex: search, $options: "i" } },
      { userName: { $regex: search, $options: "i" } },
    ];
  }
  const fields = ["fullName", "userName", "profileImage"];
  return getRecords({ ...params, filters, fields });
};

const UserService = {
  isUserExist,
  signup,
  login,
  userDetails,
  resetPassword,
  userList,
};

export default UserService;
