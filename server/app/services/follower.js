import mongoose from "mongoose";
import FollowerModel from "../models/follower.js";
import NotificationModel from "../models/notification.js";
import UserModel from "../models/user.js";
import { request } from "express";

const followRequest = async (userId, followingId) => {
  const query = { follower: userId, following: followingId };
  return FollowerModel.findOneAndUpdate(
    query,
    {
      follower: userId,
      following: followingId,
      status: "requested",
    },
    {
      new: true,
      upsert: true,
    }
  ).then(async (doc) => {
    await NotificationModel.create({
      request: doc._id,
      user: followingId,
      actor: userId,
      type: "request",
    });
  });
};

const accept = async (userId, followerId) => {
  return FollowerModel.updateOne(
    { follower: followerId, following: userId },
    { status: "accepted" }
  ).then(async () => {
    await NotificationModel.create({
      user: followerId,
      actor: userId,
      type: "follow",
    });
  });
};

const reject = async (userId, followerId) => {
  const filter = {
    following: new mongoose.Types.ObjectId(userId),
    follower: new mongoose.Types.ObjectId(followerId),
  }; // { follower: userId, following: followerId };
  return FollowerModel.updateOne(filter, { status: "rejected" });
};

const suggestions = async (userId) => {
  // get all followers id
  const followers = await FollowerModel.find({ follower: userId })
    .select("following")
    .then((followers) => followers.map((follower) => follower.following));
  const user = await UserModel.find({
    _id: { $nin: [...followers, userId] },
  })
    .select("_id fullName userName profileImage")
    .limit(10);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const requestList = async (userId) => {
  const followRequestsPromise = FollowerModel.find({
    following: userId,
    status: "requested",
  })
    .populate("follower", "fullName userName profileImage")
    .select("follower status");

  const followbackUsersPromise = FollowerModel.find({
    follower: userId,
    status: "accepted",
  }).select("following");

  return Promise.all([followRequestsPromise, followbackUsersPromise]).then(
    ([followRequests, followbackUsers]) => {
      const followingIds = followbackUsers.map((rec) => rec.following);
      return followRequests.map((rec) => {
        const recDoc = rec.toObject();
        recDoc.followBack = followingIds.includes(rec.follower._id);
        return recDoc;
      });
    }
  );
};

const FollowerService = {
  followRequest,
  accept,
  reject,
  suggestions,
  requestList,
};

export default FollowerService;
