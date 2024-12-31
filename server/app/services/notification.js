import NotificationModel from "../models/notification.js";

const notificationList = async (userId) => {
  const unreadNotifications = await NotificationModel.find({
    user: userId,
    isRead: false,
  })
    .populate("actor", "fullName userName profileImage")
    .populate("request", "status")
    .select("actor request type createdAt post story comment")
    .sort({ createdAt: -1 })
    .limit(50);

  if (unreadNotifications.length < 50) {
    const readNotifications = await NotificationModel.find({
      user: userId,
      isRead: true,
    })
      .populate("actor", "fullName userName profileImage")
      .populate("request", "status")
      .select("actor request type createdAt post story comment")
      .sort({ createdAt: -1 })
      .limit(50 - unreadNotifications.length);

    const allNotifications = unreadNotifications.concat(readNotifications);
    return allNotifications;
  }

  return unreadNotifications.limit(50);
};

const markAsRead = async (userId) => {
  return NotificationModel.updateMany({ user: userId }, { isRead: true });
};

const NotificationService = {
  notificationList,
  markAsRead,
};

export default NotificationService;
