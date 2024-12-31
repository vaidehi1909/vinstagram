import mongoose from "mongoose";
const { Schema } = mongoose;

let commentSchema = Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    parent: { type: Schema.Types.ObjectId, ref: "Comment" },
  },
  { timestamps: true }
);

commentSchema.index({ post: 1, user: 1 });
const CommentModel = mongoose.model("Comment", commentSchema);

export default CommentModel;
