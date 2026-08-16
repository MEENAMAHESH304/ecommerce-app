const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Product = require("./models/Product");

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 69999,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 64999,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
  }
];

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products inserted successfully");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Error inserting products:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedProducts();