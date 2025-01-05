import mongoose from "mongoose";
const { Schema } = mongoose;

let commentSchema = Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    parent: { type: Schema.Types.ObjectId, ref: "Comment" },
    likesCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

commentSchema.index({ post: 1 });
const CommentModel = mongoose.model("Comment", commentSchema);

export default CommentModel;
