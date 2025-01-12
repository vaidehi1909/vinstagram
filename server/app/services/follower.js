import mongoose from "mongoose";
import FollowerModel from "../models/follower.js";
import NotificationModel from "../models/notification.js";
import UserModel from "../models/user.js";
import BaseQueryBuilder from "../utils/baseQueryBuilder.js";
import { validateDuplicate } from "../utils/responseHelper.js";

const followRequest = async (userId, followingId) => {
  const query = { follower: userId, following: followingId };
  FollowerModel.create({
    follower: userId,
    following: followingId,
    status: "requested",
  });
  return FollowerModel.create({
    follower: userId,
    following: followingId,
    status: "requested",
  })
    .then(async (doc) => {
      await NotificationModel.create({
        request: doc._id,
        user: followingId,
        actor: userId,
        type: "request",
      });
    })
    .catch((error) => {
      if (validateDuplicate(error)) {
        throw new Error(`You have already sent a request to this user`);
      }
      throw error; // throw error if not duplicate key error
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
  const followings = await FollowerModel.find({ follower: userId })
    .select("following")
    .then((followers) => followers.map((follower) => follower.following));
  const user = await UserModel.find({
    _id: { $nin: [...followings, userId] },
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

const getRecords = (params) => {
  const queryBuilder = new BaseQueryBuilder(FollowerModel, params);
  return queryBuilder.build();
};

const list = async (params) => {
  const { userId, type, status = "accepted", search } = params;
  const filters =
    type === "followers" ? { following: userId } : { follower: userId };
  if (status) filters.status = status;
  // if (search) filters.$or = [{ follower: search }, { following: search }];
  const populateField = type === "followers" ? "follower" : "following";
  const populate = [populateField, "fullName userName profileImage"];
  const fields =
    type === "followers" ? ["follower status"] : ["following status"];
  const sort = { createdAt: -1 }; // sort by latest
  return getRecords({ ...params, filters, populate, fields, sort }).then(
    async (records) => {
      if (type === "followers") {
        return records.map((record) => {
          return { ...record.toObject()?.follower, status: record.status };
        });
      }
      return records.map((record) => {
        return { ...record.toObject()?.following, status: record.status };
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
  list,
};

export default FollowerService;
