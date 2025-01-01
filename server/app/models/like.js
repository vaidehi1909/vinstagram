import mongoose from "mongoose";
const { Schema } = mongoose;

let likeSchema = Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    story: { type: Schema.Types.ObjectId, ref: "Story" },
    type: { type: String, enum: ["post", "comment", "story"] },
  },
  { timestamps: true }
);

// Create a compound unique index
likeSchema.index(
  { post: 1, user: 1 },
  { unique: true, partialFilterExpression: { post: { $exists: true } } }
);
likeSchema.index(
  { comment: 1, user: 1 },
  { unique: true, partialFilterExpression: { comment: { $exists: true } } }
);
likeSchema.index(
  { story: 1, user: 1 },
  { unique: true, partialFilterExpression: { story: { $exists: true } } }
);
const LikeModel = mongoose.model("Like", likeSchema);

export default LikeModel;
