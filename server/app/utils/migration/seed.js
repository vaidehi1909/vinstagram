import { connectDB } from "../../config/db.js";
import { seedUsers } from "./user.js";
import { seedPosts } from "./post.js";

export const migrate = async () => {
  try {
    console.log("Migrating started...");
    await connectDB();
    await seedUsers(50);
    await seedPosts(20);
    console.log("Migrating ended...");
  } catch (error) {
    console.error("Error migrating data:", error);
  } finally {
    process.exit(0);
  }
};

//Call the migrate function
migrate();
