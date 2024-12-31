import User from "../../models/user.js";
import { connectDB } from "../../config/db.js";
import authService from "../../services/auth.js";
import { faker } from "@faker-js/faker";

// Function to generate fake user records using faker
const generateFakeUsers = (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    const passwordHash = authService.generateHashPassword(
      "123" //faker.internet.password()
    );
    users.push({
      phoneNo: faker.phone
        .number("##########")
        .replace(/[-.]/g, "")
        .slice(0, 10),
      fullName: faker.person.fullName(),
      emailId: faker.internet.email(),
      userName: faker.internet.userName(),
      password: passwordHash,
      profileImage: faker.image.avatar(),
      bio: faker.lorem.sentence(),
      gender: faker.helpers.arrayElement(["male", "female", "other"]),
      dob: faker.date.past(30, new Date("2000-01-01")),
      accountType: faker.helpers.arrayElement(["public", "private"]),
      isActive: true, //faker.datatype.boolean(),
    });
  }
  return users;
};

// Function to insert fake users into the database
const insertFakeUsers = async (num) => {
  try {
    const users = generateFakeUsers(num);
    console.log("Inserting user records...", users.length);
    await User.insertMany(users);
    console.log(`${num} user records inserted successfully`);
    process.exit(0);
  } catch (error) {
    console.error("Error inserting user records:", error);
    process.exit();
  }
};

const deleteUsers = async () => {
  const ingoreUser = ["teste@exemplo.us", "teste@exemplo.in"];
  try {
    const users = await User.find({ emailId: { $nin: ingoreUser } });
    console.log("Deleting user records...", users.length);
    await User.deleteMany({ emailId: { $nin: ingoreUser } });
    console.log(`${users.length} user records deleted successfully`);
    process.exit(0);
  } catch (error) {
    console.error("Error deleting user records:", error);
    process.exit();
  }
};

export const migrate = async () => {
  try {
    console.log("Migrating started...");
    await connectDB();
    await insertFakeUsers(50);
    console.log("Migrating ended...");
  } catch (error) {
    console.error("Error migrating data:", error);
  }
};

//Call the migrate function
migrate();
