import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
import pLimit from "p-limit";
import fs from "fs";
import constants from "../../../constants.js";

let s3Client;
// Create a concurrency limiter - adjust the number based on your needs
const limit = pLimit(3); // Allows 3 concurrent uploads

const getS3Client = () => {
  if (s3Client) return s3Client;
  s3Client = new S3Client({
    region: constants.AWS_REGION,
    credentials: {
      accessKeyId: constants.AWS_ACCESS_KEY_ID,
      secretAccessKey: constants.AWS_SECRET_ACCESS_KEY,
    },
  });
  return s3Client;
};

const uploadFile = async (file, key) => {
  const uploadParams = {
    Bucket: constants.AWS_S3_BUCKET,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(uploadParams);
  await getS3Client().send(command);

  return {
    url: `https://${constants.AWS_S3_BUCKET}.s3.${constants.AWS_REGION}.amazonaws.com/${key}`,
    mimetype: file.mimetype,
  };
};

const uploadFiles = async (files) => {
  // Upload files concurrently with rate limiting
  const uploadPromises = files.map((file) => {
    return limit(async () => {
      const fileName = `media/${uuidv4()}.${file.originalname
        .split(".")
        .pop()}`;
      return await uploadFileToS3(file, fileName);
    });
  });

  // Wait for all uploads to complete
  return Promise.all(uploadPromises);
};

const uploadFileToS3 = async (file, key) => {
  const fileStream = fs.createReadStream(file.path);

  try {
    const upload = new Upload({
      client: getS3Client(),
      params: {
        Bucket: constants.AWS_S3_BUCKET,
        Key: key,
        Body: fileStream,
        ContentType: file.mimetype,
      },
      // tags: [{ Key: "originalName", Value: file.originalname }],
      queueSize: 4, // number of concurrent parts uploaded
      partSize: 5 * 1024 * 1024, // 5MB part size
    });

    await upload.done();

    return {
      originalName: file.originalname,
      url: `https://${constants.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
      mimetype: file.mimetype,
      size: file.size,
    };
  } finally {
    // Clean up temp file
    fs.unlink(file.path, (err) => {
      if (err) console.error(`Error deleting temp file ${file.path}:`, err);
    });
  }
};

const getS3SignedUrl = async (key, expiresIn = 3600) => {
  const command = new GetObjectCommand({
    Bucket: constants.AWS_S3_BUCKET,
    Key: key,
  });
  return await getSignedUrl(getS3Client(), command, { expiresIn });
};

const deleteFile = async (key) => {
  const command = new DeleteObjectCommand({
    Bucket: constants.AWS_S3_BUCKET,
    Key: key,
  });
  await getS3Client().send(command);
};

const S3Service = { getS3SignedUrl, deleteFile, uploadFiles };

export default S3Service;
