import CONSTANTS from "../../constants.js";
import jwt from "jsonwebtoken";

const authenction = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")?.[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, CONSTANTS.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default authenction;
