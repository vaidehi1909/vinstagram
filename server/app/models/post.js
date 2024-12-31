import mongoose from "mongoose";
const { Schema } = mongoose;
let postSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    caption: { type: String, default: "" },
    likesCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    tages: [String],
    hasMedia: { type: Boolean, default: false },
  },
  { timestamps: true }
);

postSchema.index({ user: 1 });

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
