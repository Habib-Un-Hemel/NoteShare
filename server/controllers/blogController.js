import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req, res) => {
  try {
    let blogData;
    try {
      blogData = JSON.parse(req.body.blog);
    } catch (parseError) {
      return res.status(400).json({ success: false, message: "Invalid JSON in blog data" });
    }

    const { title, subTitle, description, category, isPublished } = blogData;
    const imageFile = req.file;

    // Check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    let fileBuffer;
    try {
      fileBuffer = fs.readFileSync(imageFile.path);
    } catch (fsError) {
      return res.status(500).json({ success: false, message: "Failed to read image file" });
    }

    // Upload the image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Optimization through imagekit transformation
    const optimzationImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" },
        { format: "webp" },
        { quality: "auto" },
      ],
    });

    const image = optimzationImageUrl;
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    console.error("Error in addBlog:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
