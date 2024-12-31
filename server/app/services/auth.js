import jwt from "jsonwebtoken";
import CONSTANTS from "../../constants.js";
import bcrypt from "bcrypt";

const generateToken = (user) => {
  const token = jwt.sign(
    { id: user._id, emailId: user.emailId, userName: user.userName },
    CONSTANTS.JWT_SECRET,
    { expiresIn: "1d" }
  );
  return token;
};

const generateHashPassword = (password) => {
  const saltRounds = 10; // Define salt rounds

  const salt = bcrypt.genSaltSync(saltRounds);
  // Hash the password with the generated salt
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const authService = { generateToken, generateHashPassword };
export default authService;
