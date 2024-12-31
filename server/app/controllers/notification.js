import NotificationService from "../services/notification.js";
import { errorResponse, successResponse } from "../utils/responeshelper.js";

class NotificationController {
  async notificationList(req, res, next) {
    return NotificationService.notificationList(req.user.id)
      .then((data) => successResponse(res, "notification list", data))
      .catch((error) => errorResponse(res, error));
  }

  async markAsRead(req, res, next) {
    return NotificationService.markAsRead(
      req.user.id,
      req.params.notificationId
    )
      .then((data) => successResponse(res, "notification marked as read", data))
      .catch((error) => errorResponse(res, error));
  }
}

export default NotificationController;
