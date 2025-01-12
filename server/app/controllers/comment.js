import { errorResponse, successResponse } from "../utils/responseHelper.js";
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
    validationService.validateParams(req.params, ["commentId"]);
    return LikeService.likeComment(req.params.commentId, req.user.id)
      .then((data) => successResponse(res, "comment liked", data))
      .catch((error) => errorResponse(res, error));
  }

  async unlikeComment(req, res, next) {
    validationService.validateParams(req.params, ["commentId"]);
    return LikeService.unlikeComment(req.params.commentId, req.user.id)
      .then((data) => successResponse(res, "comment unliked", data))
      .catch((error) => errorResponse(res, error));
  }
}

export default CommentController;
