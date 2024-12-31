import PostService from "../services/post.js";
import { errorResponse, successResponse } from "../utils/responeshelper.js";
// import validationService from "../utils/validationService.js";

class PostController {
  async postList(req, res, next) {
    const userId = req.user.id;
    const params = { ...req.query, userId };
    return PostService.getPostList(params) // except current user
      .then((data) => successResponse(res, "all posts", data))
      .catch((error) => errorResponse(res, error));
  }

  async userPosts(req, res, next) {
    const userId = req.user.id;
    const params = { ...req.query, userId };
    return PostService.getUserPosts(params)
      .then((data) => successResponse(res, "user posts", data))
      .catch((error) => errorResponse(res, error));
  }

  async userFeed(req, res, next) {
    const userId = req.user.id;
    const params = { ...req.query, userId };
    return PostService.getUserFeed(params)
      .then((data) => successResponse(res, "user feed", data))
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
}

export default PostController;
