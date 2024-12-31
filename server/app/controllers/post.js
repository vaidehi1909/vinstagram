import PostService from "../services/post.js";
import { errorResponse, successResponse } from "../utils/responeshelper.js";
// import validationService from "../utils/validationService.js";

class PostController {
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
