const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

connectDB();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Parse JSON requests
app.use(express.json());

// Product routes
const productRoutes = require("./routes/products");

app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("E-Commerce API Running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});