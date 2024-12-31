import mongoose from "mongoose";
const { Schema } = mongoose;

let likeSchema = Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    story: { type: Schema.Types.ObjectId, ref: "Story" },
  },
  { timestamps: true }
);

likeSchema.index({ post: 1, comment: 1, story: 1 });
const LikeModel = mongoose.model("Like", likeSchema);

export default LikeModel;
