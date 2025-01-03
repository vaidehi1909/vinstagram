import PostModel from "../models/post.js";
import S3Service from "../utils/aws/s3.js";
import LikeService from "./like.js";

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
  const { filters = {}, fields = [], sort, populate, pagination } = params;
  let query = PostModel.find(filters);
  if (fields.length) query = query.select(fields.join(" "));
  if (sort) query = query.sort(params.sort);
  if (populate?.length) query = query.populate(...populate);
  if (pagination)
    query = query.skip(pagination.skip || 0).limit(pagination.limit);
  return query;
};

const buildPagination = (params) => {
  let { limit, page } = params;
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  return { skip: (page - 1) * limit, limit };
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
  const pagination = buildPagination(params);
  return getPosts({ filters, fields, pagination });
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
  const pagination = buildPagination(params);
  return getPosts({ filters, fields, sort, populate, pagination }).then(
    async (posts) => {
      return await updateUserLikedPosts(posts, userId);
    }
  );
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
  const pagination = buildPagination(params);
  return getPosts({ filters, fields, pagination });
};

const deletePost = async (postId) => {
  return await PostModel.deleteOne({ _id: postId });
};

const PostService = {
  createPost,
  getPosts,
  deletePost,
  getUserPosts,
  getUserFeed,
  getPostList,
};

export default PostService;
