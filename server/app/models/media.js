import mongoose from "mongoose";
const { Schema } = mongoose;

let mediaSchema = Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    type: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

mediaSchema.index({ post: 1 });
const MediaModel = mongoose.model("Media", mediaSchema);

export default MediaModel;
