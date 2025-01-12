import PostModel from "../models/post.js";
import S3Service from "../utils/aws/s3.js";
import LikeService from "./like.js";
import BaseQueryBuilder from "../utils/baseQueryBuilder.js";

const createPost = async (postData, mediaFiles) => {
  return S3Service.uploadFiles(mediaFiles).then(async (res) => {
    const postMediaFiles = (res || []).map((file) => {
      return {
        url: file.url,
        type: file.mimetype, //file.type.startsWith('image') ? 'image' : 'video',
      };
    });
    await PostModel.create({
      caption: postData.caption || "",
      user: postData.userId,
      tages: postData.tages || [],
      media: postMediaFiles,
      mainThumbnail: postMediaFiles[0]?.url,
    });
  });
};

const getPosts = async (params = {}) => {
  const queryBuilder = new BaseQueryBuilder(PostModel, params);
  return queryBuilder.build();
};

const getMyPosts = async (params) => {
  return getUserPosts(params);
};

const getUserPosts = async (params) => {
  const { userId } = params;
  const filters = { user: userId };
  const fields = [
    "caption",
    "mainThumbnail",
    "likesCount",
    "commentCount",
    "createdAt",
  ];
  return getPosts({ ...params, filters, fields });
};

const getUserFeed = async (params) => {
  const { userId } = params;
  const filters = { user: { $ne: userId } };
  const fields = [
    "caption",
    "media",
    "likesCount",
    "commentCount",
    "tages",
    "createdAt",
  ];
  const sort = { createdAt: -1 };
  const populate = ["user", "fullName userName profileImage"];
  return getPosts({ ...params, filters, fields, sort, populate }).then(
    async (posts) => {
      return await updateUserLikedPosts(posts, userId);
    }
  );
};

const getPostDetails = async (postId, fields = []) => {
  return PostModel.findById(postId)
    .populate("user", "fullName userName profileImage")
    .select(fields.join(" "))
    .then(async (post) => {
      if (!post) throw new Error("Post not found");
      return await updateUserLikedPosts([post], post.user._id).then(
        (posts) => posts?.[0]
      );
    });
};

const updateUserLikedPosts = async (posts, userId) => {
  const postIds = posts.map((post) => post._id);
  const userLikedPosts = await LikeService.getUserLikePosts(
    userId,
    postIds
  ).then((data) => {
    return data.reduce((acc, likedPost) => {
      acc[likedPost.post] = true;
      return acc;
    }, {});
  });
  posts = posts.map((post) => {
    const newPost = post.toObject();
    newPost.isLiked = userLikedPosts[post._id] || false;
    return newPost;
  });
  return posts;
};

const getPostList = async (params) => {
  const { userId } = params;
  const filters = { user: { $ne: userId } };
  const fields = ["user", "caption", "mainThumbnail"];
  return getPosts({ ...params, filters, fields }).then;
};

const deletePost = async (postId) => {
  return await PostModel.deleteOne({ _id: postId });
};

const PostService = {
  createPost,
  getPosts,
  getMyPosts,
  deletePost,
  getUserPosts,
  getUserFeed,
  getPostList,
  getPostDetails,
};

export default PostService;
