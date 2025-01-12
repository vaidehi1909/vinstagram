import CommentModel from "../models/comment.js";
import LikeModel from "../models/like.js";
import PostModel from "../models/post.js";
import { validateDuplicate } from "../utils/responseHelper.js";

const likePost = async (post, user) => {
  await validatePost(post);
  return LikeModel.create({ post, user, type: "post" })
    .then(async () => {
      await PostModel.updateOne({ _id: post }, { $inc: { likesCount: 1 } });
    })
    .catch((error) => {
      if (validateDuplicate(error)) {
        throw new Error(`post already liked`);
      }
      throw error;
    });
};

const unlikePost = async (post, user) => {
  await validatePost(post);
  return LikeModel.deleteOne({ post, user }).then(async (res) => {
    if (res.deletedCount === 1)
      await PostModel.updateOne({ _id: post }, { $inc: { likesCount: -1 } });
  });
};

const likeComment = async (comment, user) => {
  await validateComment(comment);
  return LikeModel.create({ comment, user, type: "comment" })
    .then(async () => {
      await CommentModel.updateOne(
        { _id: comment },
        { $inc: { likesCount: 1 } }
      );
    })
    .catch((error) => {
      if (validateDuplicate(error)) {
        throw new Error(`comment already liked`);
      }
      throw error;
    });
};

const unlikeComment = async (comment, user) => {
  await validateComment(comment);
  return LikeModel.deleteOne({ comment, user }).then(async (res) => {
    if (res.deletedCount === 1)
      await CommentModel.updateOne(
        { _id: comment },
        { $inc: { likesCount: -1 } }
      );
  });
};

const validatePost = async (post) => {
  const postExists = await PostModel.exists({ _id: post });
  if (!postExists) {
    throw new Error("post not found");
  }
};

const validateComment = async (comment) => {
  const commentExists = await CommentModel.exists({ _id: comment });
  if (!commentExists) {
    throw new Error("comment not found");
  }
};

const getUserLikePosts = async (user, postIds = null) => {
  const filters = { user };
  if (postIds) filters.post = { $in: postIds };
  return LikeModel.find(filters);
};

const getUserLikeComments = async (user, commentIds = null) => {
  const filters = { user };
  if (commentIds) filters.comment = { $in: commentIds };
  return LikeModel.find(filters);
};

const LikeService = {
  likePost,
  unlikePost,
  likeComment,
  unlikeComment,
  getUserLikePosts,
  getUserLikeComments,
};
export default LikeService;
