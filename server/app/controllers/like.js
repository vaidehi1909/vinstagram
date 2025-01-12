import { errorResponse, successResponse } from "../utils/responseHelper.js";
import validationService from "../utils/validationService.js";
import LikeService from "../services/like.js";

class LikeController {
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

export default LikeController;
