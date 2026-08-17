const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URI configured:", !!process.env.MONGO_URI);

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set in Render Environment Variables");
    }

    console.log(
      "MONGO_URI starts with:",
      process.env.MONGO_URI.substring(0, 14)
    );

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;