import mongoose from "mongoose";
const { Schema } = mongoose;
let storySchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    mention: [{ type: Schema.Types.ObjectId, ref: "User" }],
    mediaUrl: { type: String, required: true },
    mediaType: { type: String, required: true },
    likesCount: { type: Number, default: 0 },
    expiry: { type: Date, required: true },
  },
  { timestamps: true }
);

storySchema.index({ user: 1 });
const StoryModel = mongoose.model("Story", storySchema);

export default StoryModel;
