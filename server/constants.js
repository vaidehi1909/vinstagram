import dotenv from "dotenv";
dotenv.config();

const CONSTANTS = {
  PORT: process.env.PORT || 4000,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  S3_PRIVATE_BUCKET: process.env.S3_PRIVATE_BUCKET,
};

export default CONSTANTS