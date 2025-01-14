import FollowerModel from "../models/follower.js";
import PostModel from "../models/post.js";
import UserModel from "../models/user.js";
import S3Service from "../utils/aws/s3.js";
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

const userDetails = async (userId, currentUserId) => {
  let user = await UserModel.findById(userId).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  const [followers, following, post] = await Promise.all([
    FollowerModel.find({
      following: userId,
      status: "accepted",
    }).countDocuments(),
    FollowerModel.find({
      follower: userId,
      status: "accepted",
    }).countDocuments(),
    PostModel.find({ user: userId }).countDocuments(),
  ]);
  user = user.toObject();
  if (currentUserId !== userId) {
    user.isFollowing = await FollowerModel.exists({
      follower: currentUserId,
      following: userId,
      status: "accepted",
    })
      .then((hasRecord) => !!hasRecord)
      .catch(() => false);
  }
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
  const { search, userId } = params;
  const filters = { _id: { $ne: userId } };
  if (search) {
    filters.$or = [
      { fullName: { $regex: search, $options: "i" } },
      { userName: { $regex: search, $options: "i" } },
    ];
  }
  const fields = ["fullName", "userName", "profileImage"];
  return getRecords({ ...params, filters, fields });
};

const updateProfileImage = async (userId, file) => {
  const user = await UserModel.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  user.profileImage = await S3Service.uploadFiles([file])
    .then((res) => res?.[0]?.url)
    .catch(() => new Error("File upload failed"));
  return user.save().then((user) => {
    return { profileImage: user.profileImage };
  });
};

const deleteProfileImage = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  await S3Service.deleteMedia(user.profileImage).catch(() =>
    console.error("File delete failed")
  );
  user.profileImage = "";
  return user.save().then((user) => {
    return { profileImage: user.profileImage };
  });
};

const updateUserProfile = async (params) => {
  const { userId } = params;

  const user = await UserModel.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  ["bio", "gender", "fullName", "accountType"].forEach((key) => {
    if (params[key]) user[key] = params[key];
  });
  return user.save();
};

const UserService = {
  isUserExist,
  signup,
  login,
  userDetails,
  resetPassword,
  userList,
  updateUserProfile,
  updateProfileImage,
  deleteProfileImage,
};

export default UserService;
