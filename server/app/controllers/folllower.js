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

  async unfollow(req, res, next) {
    return FollowerService.unfollow(req.user.id, req.params.followingId)
      .then((data) => successResponse(res, "unfollowed", data))
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

  async followerlist(req, res, next) {
    const currentUserId = req.user.id;
    let userId = req.params.userid;
    if (userId === "me") userId = currentUserId;
    return FollowerService.followerlist({ ...req.query, userId, currentUserId })
      .then((data) => successResponse(res, "followers", data))
      .catch((error) => errorResponse(res, error));
  }

  async followinglist(req, res, next) {
    const currentUserId = req.user.id;
    let userId = req.params.userid;
    if (userId === "me") userId = currentUserId;
    return FollowerService.followinglist({
      ...req.query,
      userId,
      currentUserId,
    })
      .then((data) => successResponse(res, "following", data))
      .catch((error) => errorResponse(res, error));
  }
}



export default FollowerController;
