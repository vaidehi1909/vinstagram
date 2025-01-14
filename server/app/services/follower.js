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

const unfollow = async (userId, followingId) => {
  const filter = {
    follower: new mongoose.Types.ObjectId(userId),
    following: new mongoose.Types.ObjectId(followingId),
  }; // { follower: userId, following: followerId };
  return FollowerModel.deleteOne(filter);
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

const followerlist = async (params) => {
  const { userId, currentUserId } = params;
  const filters = { following: userId, status: "accepted" };
  const populate = ["follower", "fullName userName profileImage"];
  const fields = ["follower status"];
  const sort = { createdAt: -1 }; // sort by latest
  return getRecords({ ...params, filters, populate, fields, sort })
    .then((records) => {
      return records.map((record) => {
        const newRecord = record.toObject();
        return {
          ...newRecord?.follower,
          status: record.status,
        };
      });
    })
    .then((records) => {
      if (userId !== currentUserId)
        return updateCurrentUserFollowing(records, currentUserId);
      return records;
    });
};

const followinglist = async (params) => {
  const { userId, currentUserId } = params;
  const filters = { follower: userId, status: "accepted" };
  const populate = ["following", "fullName userName profileImage"];
  const fields = ["following status"];
  const sort = { createdAt: -1 }; // sort by latest
  return getRecords({ ...params, filters, populate, fields, sort })
    .then((records) => {
      return records.map((record) => {
        const newRecord = record.toObject();
        return {
          ...newRecord?.following,
          status: record.status,
        };
      });
    })
    .then((records) => {
      if (userId !== currentUserId)
        return updateCurrentUserFollowing(records, currentUserId);
      return records;
    });
};

const updateCurrentUserFollowing = async (records, currentUserId) => {
  const ids = records.map((rec) => rec._id);
  const currentUserFollowings = await FollowerModel.find({
    follower: currentUserId,
    following: { $in: ids },
    status: "accepted",
  })
    .select("following")
    .then((rec) => {
      return rec.map((rec) => rec.following.toString());
    });
  return records.map((rec) => {
    rec.isFollowing = currentUserFollowings.includes(rec._id.toString());
    return rec;
  });
};

const FollowerService = {
  followRequest,
  accept,
  reject,
  unfollow,
  suggestions,
  requestList,
  followerlist,
  followinglist,
};

export default FollowerService;
