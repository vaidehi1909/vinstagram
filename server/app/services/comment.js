import CommentModel from "../models/comment.js";
import BaseQueryBuilder from "../utils/baseQueryBuilder.js";
import LikeService from "./like.js";

const getComments = async (params = {}) => {
  const queryBuilder = new BaseQueryBuilder(CommentModel, params);
  return queryBuilder.build();
};

const getPostComments = async (params) => {
  const { postId, userId } = params;
  const filters = { post: postId };
  const populate = ["user", "fullName userName profileImage"];
  const sort = { createdAt: -1 }; // sort by latest
  return getComments({ ...params, filters, populate, sort }).then(
    async (comments) => {
      return await updateUserLikedComments(comments, userId);
    }
  );
};

const updateUserLikedComments = async (comments, userId) => {
  const commentIds = comments.map((comment) => comment._id);
  const userLikedComments = await LikeService.getUserLikeComments(
    userId,
    commentIds
  ).then((data) => {
    console.log(data, "liked comments.....");
    return data.reduce((acc, likedComment) => {
      acc[likedComment.comment] = true;
      return acc;
    }, {});
  });
  comments = comments.map((comment) => {
    const newComment = comment.toObject();
    newComment.isLiked = userLikedComments[newComment._id] || false;
    return newComment;
  });
  return comments;
};

const createComment = async (params, userId) => {
  const { postId, content } = params;
  return CommentModel.create({ post: postId, content, user: userId });
};

const CommentService = {
  getPostComments,
  createComment,
};

export default CommentService;
