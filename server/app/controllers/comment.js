import { errorResponse, successResponse } from "../utils/responeshelper.js";
import validationService from "../utils/validationService.js";
import LikeService from "../services/like.js";
import CommentService from "../services/comment.js";

class CommentController {
  async createComment(req, res, next) {
    validationService.validateParams(req.body, ["postId", "content"]);
    return CommentService.createComment(req.body, req.user.id)
      .then((data) =>
        successResponse(res, "comment created successfully", data)
      )
      .catch((error) => errorResponse(res, error));
  }
  async likeComment(req, res, next) {
    validationService.validateParams(req.params, ["postId"]);
    return LikeService.likeComment(req.params.postId, req.user.id)
      .then((data) => successResponse(res, "post liked", data))
      .catch((error) => errorResponse(res, error));
  }

  async unlikeComment(req, res, next) {
    validationService.validateParams(req.params, ["postId"]);
    return LikeService.unlikeComment(req.params.postId, req.user.id)
      .then((data) => successResponse(res, "post unliked", data))
      .catch((error) => errorResponse(res, error));
  }
}

export default CommentController;
