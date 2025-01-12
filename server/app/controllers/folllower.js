import FollowerService from "../services/follower.js";
import { errorResponse, successResponse } from "../utils/responseHelper.js";

class FollowerController {
  async followRequest(req, res, next) {
    return FollowerService.followRequest(req.user.id, req.params.followingId)
      .then((data) => successResponse(res, "follow request sent", data))
      .catch((error) => errorResponse(res, error));
  }

  async accept(req, res, next) {
    return FollowerService.accept(req.user.id, req.params.followerId)
      .then((data) => successResponse(res, "follow request accepted", data))
      .catch((error) => errorResponse(res, error));
  }

  async reject(req, res, next) {
    return FollowerService.reject(req.user.id, req.params.followerId)
      .then((data) => successResponse(res, "follow request rejected"))
      .catch((error) => errorResponse(res, error));
  }

  async suggestions(req, res, next) {
    return FollowerService.suggestions(req.user.id)
      .then((data) => successResponse(res, "suggestions", data))
      .catch((error) => errorResponse(res, error));
  }

  async requestList(req, res, next) {
    return FollowerService.requestList(req.user.id)
      .then((data) => successResponse(res, "follow requests", data))
      .catch((error) => errorResponse(res, error));
  }
  async list(req, res, next) {
    const userId = req.params.userid || req.user.id;
    const type = req.query.type || "followers";
    return FollowerService.list({ ...req.query, userId, type })
      .then((data) => successResponse(res, "followers", data))
      .catch((error) => errorResponse(res, error));
  }
}



export default FollowerController;
