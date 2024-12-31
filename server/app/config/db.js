import mongoose from "mongoose";
import CONSTANTS from "../../constants.js";

// Connection Options (optional)
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
// };

export async function connectDB() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(CONSTANTS.MONGODB_URL, { dbName: "vinstagram" });

    // Confirm successful connection
    console.log("Successfully connected to MongoDB using Mongoose!");

    // You can define your schemas and models here if needed
    // Example: const User = mongoose.model("User", userSchema);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  } finally {
    // Optionally, close the connection after certain operations (not typical in persistent servers)
    // mongoose.connection.close();
  }
}

export default function () {
  connectDB();
}
