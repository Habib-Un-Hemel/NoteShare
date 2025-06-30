import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import multer from "multer";

const app = express();

await connectDB();

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" })); // Prevent large payload attacks

// Routes
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler (UNCOMMENTED AND ENHANCED)
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);

  // Handle Multer errors
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: "File upload error: " + err.message,
    });
  }

  // Handle JSON parse errors
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON payload",
    });
  }

  // Handle malformed multipart errors
  if (err.message && err.message.includes("Malformed part header")) {
    return res.status(400).json({
      success: false,
      message: "Invalid file upload format",
    });
  }

  // Default error handler
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; // import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./configs/db.js";
// import adminRouter from "./routes/adminRoutes.js";
// import blogRouter from "./routes/blogRoutes.js";

// const app = express();

// await connectDB();

// //middlewares
// app.use(cors());
// app.use(express.json());

// //routes
// app.get("/", (req, res) => {
//   res.send("Hello from the server!");
// });
// app.use("/api/admin", adminRouter);
// app.use("/api/blog", blogRouter);

// // Global error handling middleware
// // app.use((err, req, res, next) => {
// //   console.error("Global error handler:", err);
// //   if (err) {
// //     if (err.code === "LIMIT_UNEXPECTED_FILE") {
// //       return res.status(400).json({ success: false, message: "Unexpected file field" });
// //     }
// //     if (err.message && err.message.includes("Malformed part header")) {
// //       return res.status(400).json({ success: false, message: "Malformed multipart/form-data request" });
// //     }
// //     return res.status(500).json({ success: false, message: err.message || "Internal Server Error" });
// //   }
// //   next();
// // });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export default app;
