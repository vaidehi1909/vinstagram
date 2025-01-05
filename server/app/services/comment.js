import CommentModel from "../models/comment.js";
import BaseQueryBuilder from "../utils/baseQueryBuilder.js";

const getComments = async (params = {}) => {
  const queryBuilder = new BaseQueryBuilder(CommentModel, params);
  return queryBuilder.build();
};

const getPostComments = async (params) => {
  const { postId } = params;
  const filters = { post: postId };
  const populate = ["user", "fullName userName profileImage"];
  const sort = { createdAt: -1 }; // sort by latest
  return getComments({ ...params, filters, populate, sort });
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
