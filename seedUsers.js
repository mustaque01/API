const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { faker } = require("@faker-js/faker");
const User = require("./models/User");
const connectDB = require("./config/db");

dotenv.config();

const seedUsers = async () => {
  try {
    await connectDB();

    // Purana data delete kar do
    await User.deleteMany();
    console.log("🗑️ Old data deleted successfully");

    // 50 users generate karna
    const users = [];
    for (let i = 0; i < 50; i++) {
      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 8 }),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }

    // MongoDB me insert karna
    await User.insertMany(users);
    console.log("✅ 50 Users Added Successfully");
    
    // Connection close karna
    await mongoose.connection.close();
    console.log("🔐 Database connection closed");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedUsers();
