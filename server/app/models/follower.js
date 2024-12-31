import mongoose from "mongoose";
const { Schema } = mongoose;

let followerSchema = Schema(
  {
    follower: { type: Schema.Types.ObjectId, ref: "User", required: true },
    following: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["requested", "accepted", "rejected"],
      default: "requested",
    },
  },
  { timestamps: true }
);

followerSchema.index({ follower: 1, following: 1 });
const FollowerModel = mongoose.model("Follower", followerSchema);

export default FollowerModel;
