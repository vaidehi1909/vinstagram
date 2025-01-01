import LikeModel from "../models/like.js";
import PostModel from "../models/post.js";

const likePost = async (post, user) => {
  await validatePost(post);
  return LikeModel.create({ post, user, type: "post" })
    .then(async () => {
      await PostModel.updateOne({ _id: post }, { $inc: { likesCount: 1 } });
    })
    .catch((error) => {
      if (error.code === 11000) {
        // Duplicate key
        // const field = Object.keys(error.keyPattern)[0];
        throw new Error(`post already liked`);
      }
      throw error;
    });
};

const unlikePost = async (post, user) => {
  await validatePost(post);
  return LikeModel.deleteOne({ post, user, type: "post" }).then(async (res) => {
    if (res.deletedCount === 1)
      await PostModel.updateOne({ _id: post }, { $inc: { likesCount: -1 } });
  });
};

const validatePost = async (post) => {
  const postExists = await PostModel.exists({ _id: post });
  if (!postExists) {
    throw new Error("post not found");
  }
};

const getUserLikePosts = async (user, postIds = null) => {
  const filters = { user, type: "post" };
  if (postIds) filters.post = { $in: postIds };
  return LikeModel.find(filters);
};

const LikeService = { likePost, unlikePost, getUserLikePosts };
export default LikeService;
