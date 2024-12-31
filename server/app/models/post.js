import mongoose from "mongoose";
const { Schema } = mongoose;

const mediaSchema = Schema({
  type: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String },
});

const postSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    caption: { type: String, default: "" },
    likesCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    tages: [String],
    media: [mediaSchema],
    mainThumbnail: { type: String },
  },
  { timestamps: true }
);

postSchema.index({ user: 1 });

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
