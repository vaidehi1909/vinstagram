import mongoose from "mongoose";
const { Schema } = mongoose;
let userSchema = Schema(
  {
    phoneNo: { type: String, index: true, trim: true },
    fullName: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
    },
    emailId: {
      type: String,
      require: true,
      sparse: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    userName: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: String,
    profileImage: String,
    bio: String,
    gender: String,
    dob: Date,
    accountType: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

userSchema.index({ emailId: 1 }, { unique: true });

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
