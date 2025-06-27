import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

await connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  if (err) {
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ success: false, message: "Unexpected file field" });
    }
    if (err.message && err.message.includes("Malformed part header")) {
      return res.status(400).json({ success: false, message: "Malformed multipart/form-data request" });
    }
    return res.status(500).json({ success: false, message: err.message || "Internal Server Error" });
  }
  next();
});

const PORT = process.env.PORT || 3000;
