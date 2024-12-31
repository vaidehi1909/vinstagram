import PostModel from "../models/post.js";
import MediaService from "./media.js";

const createPost = async (postData, mediaFiles) => {
  // Create the post first
  return PostModel.create({
    caption: postData.caption || "",
    user: postData.userId,
    tages: postData.tages || [],
    hasMedia: false,
  }).then(async (post) => {
    // Create media records
    const result = await MediaService.createPostMedia(mediaFiles, post._id);
    if (result?.success) return { success: true };

    throw new Error("Failed to create post");
  });
};

const getPosts = async (userId) => {
  return await PostModel.find({ user: userId });
};

const deletePost = async (postId) => {
  return await PostModel.deleteOne({ _id: postId });
};

const PostService = {
  createPost,
  getPosts,
  deletePost,
};

export default PostService;
