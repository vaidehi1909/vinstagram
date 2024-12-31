import MediaModel from "../models/media.js";
import PostModel from "../models/post.js";
import S3Service from "./aws/s3.js";

const createPostMedia = async (mediaFiles, postId) => {
  try {
    return await S3Service.uploadFiles(mediaFiles).then(async (res) => {
      const postMediaFiles = (res || []).map((file) => {
        return {
          url: file.url,
          type: file.mimetype, //file.type.startsWith('image') ? 'image' : 'video',
          post: postId,
        };
      });

      await MediaModel.insertMany(postMediaFiles).then(async () => {
        await PostModel.updateOne({ _id: postId }, { hasMedia: true });
        console.log("Media records inserted successfully");
      });
      return { success: true };
    });
  } catch (error) {
    console.log(err);
    await PostModel.deleteOne({ _id: postId }).then(async () => {
      await MediaModel.deleteMany({ post: postId });
    });
    return { success: false };
  }

};

const getPostMedia = async (postId) => {
  return await MediaModel.find({ postId });
};

const MediaService = {
  createPostMedia,
  getPostMedia,
};

export default MediaService;
