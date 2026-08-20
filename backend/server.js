const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

connectDB();

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "https://ecommerce-app-ecommerce-app5.vercel.app",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

const productRoutes = require("./routes/products");

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("E-Commerce API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});