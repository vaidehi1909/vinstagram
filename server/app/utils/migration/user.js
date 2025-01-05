import authService from "../../services/auth.js";
import User from "../../models/user.js";
import { faker } from "@faker-js/faker";

// Function to generate fake user records using faker
export const generateFakeUsers = (num) => {
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
export const seedUsers = async (num) => {
  const users = generateFakeUsers(num);
  console.log("Inserting user records...", users.length);
  await User.insertMany(users);
  console.log(`${num} user records inserted successfully`);
};

export const deleteUsers = async () => {
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
