import PostModel from "../../models/post.js";
import UserModel from "../../models/user.js";
import { faker } from "@faker-js/faker";

export const seedPosts = async (count = 50) => {
  try {
    const userIds = await UserModel.find().then((users) =>
      users.map((user) => user._id)
    );

    let posts = Array.from({ length: count }).map(() => ({
      user: faker.helpers.arrayElement(userIds),
      media: Array.from({
        length: faker.number.int({ min: 1, max: 5 }),
      }).map(
        () => {
          return {
            url: faker.image.url({
              width: 640,
              height: 480,
              category: "abstract",
            }),
            type: "image",
          };
        } // Generate multiple media URLs
      ),
      caption: faker.lorem.sentence().substring(0, 20),
      tages: Array.from({
        length: faker.number.int({ min: 1, max: 5 }),
      }).map(() => faker.lorem.word()),
    }));

    posts = posts.map((post) => ({
      ...post,
      mainThumbnail: post.media[0].url,
    }));

    // Insert posts into the database
    await PostModel.insertMany(posts);

    console.log("Posts seeded successfully!");
  } catch (error) {
    console.error("Error seeding posts:", error);
  }
};
