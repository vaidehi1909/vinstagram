import PostService from "../services/post.js";
import { errorResponse, successResponse } from "../utils/responeshelper.js";
import validationService from "../utils/validationService.js";
import LikeService from "../services/like.js";
import CommentService from "../services/comment.js";

class PostController {
  async postList(req, res, next) {
    const userId = req.user.id;
    const params = { ...req.query, userId };
    return PostService.getPostList(params) // except current user
      .then((data) => successResponse(res, "all posts", data))
      .catch((error) => errorResponse(res, error));
  }

  async currentUserPosts(req, res, next) {
    const userId = req.user.id;
    const params = { ...req.query, userId };
    return PostService.getMyPosts(params)
      .then((data) => successResponse(res, "my posts", data))
      .catch((error) => errorResponse(res, error));
  }

  async userPosts(req, res, next) {
    const { userId } = req.params;
    const params = { ...req.query, userId };
    return PostService.getUserPosts(params)
      .then((data) => successResponse(res, "user posts", data))
      .catch((error) => errorResponse(res, error));
  }

  async postFeed(req, res, next) {
    const userId = req.user.id;
    const params = { ...req.query, userId };
    return PostService.getUserFeed(params)
      .then((data) => successResponse(res, "user feed", data))
      .catch((error) => errorResponse(res, error));
  }

  async postDetails(req, res, next) {
    const { postId } = req.params;
    const fields = ["caption", "media", "likesCount", "commentCount", "user"];
    return PostService.getPostDetails(postId, fields)
      .then((data) => successResponse(res, "post details", data))
      .catch((error) => errorResponse(res, error));
  }

  async postComments(req, res, next) {
    const { postId } = req.params;
    return CommentService.getPostComments({ ...req.query, postId })
      .then((data) => successResponse(res, "post comments", data))
      .catch((error) => errorResponse(res, error));
  }

  async createPost(req, res, next) {
    if (!req.files.length) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const userId = req.user.id;
    const postData = { ...req.body, userId };
    return PostService.createPost(postData, req.files)
      .then((data) => successResponse(res, "post created successfully", data))
      .catch((error) => errorResponse(res, error));
  }

  async likePost(req, res, next) {
    validationService.validateParams(req.params, ["postId"]);
    return LikeService.likePost(req.params.postId, req.user.id)
      .then((data) => successResponse(res, "post liked", data))
      .catch((error) => errorResponse(res, error));
  }

  async unlikePost(req, res, next) {
    validationService.validateParams(req.params, ["postId"]);
    return LikeService.unlikePost(req.params.postId, req.user.id)
      .then((data) => successResponse(res, "post unliked", data))
      .catch((error) => errorResponse(res, error));
  }
}

export default PostController;
