import { request } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

let notificationSchema = Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    story: { type: Schema.Types.ObjectId, ref: "Story" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    actor: { type: Schema.Types.ObjectId, ref: "User" },
    request: { type: Schema.Types.ObjectId, ref: "Follower" },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    isRead: { type: Boolean, default: false },
    type: {
      type: String,
      enum: [
        "like",
        "comment",
        "follow",
        "reply",
        "post",
        "mention",
        "request",
      ],
    },
  },
  { timestamps: true }
);

notificationSchema.index({ user: 1 });
const NotificationModel = mongoose.model("Notification", notificationSchema);

export default NotificationModel;
