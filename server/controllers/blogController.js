import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req, res) => {
  try {
    // 1. First validate required fields exist
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file uploaded",
      });
    }

    if (!req.body.blog) {
      return res.status(400).json({
        success: false,
        message: "Blog data is required in 'blog' field",
      });
    }

    // 2. Then parse the JSON
    let blogData;
    try {
      blogData = JSON.parse(req.body.blog);
    } catch (parseError) {
      return res.status(400).json({
        success: false,
        message: "Invalid JSON format in blog data",
      });
    }

    const { title, subTitle, description, category, isPublished } = blogData;

    // 3. Validate parsed data
    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, description and category are required",
      });
    }

    let fileBuffer;
    try {
      fileBuffer = fs.readFileSync(req.file.path);
    } catch (fsError) {
      return res.status(500).json({
        success: false,
        message: "Failed to process image file",
      });
    }

    // Upload to ImageKit
    let response;
    try {
      response = await imagekit.upload({
        file: fileBuffer,
        fileName: req.file.originalname,
        folder: "/blogs",
      });
    } catch (uploadError) {
      return res.status(500).json({
        success: false,
        message: "Failed to upload image to storage",
      });
    }

    // Generate optimized URL
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" },
        { format: "webp" },
        { quality: "auto" },
      ],
    });

    // Create blog post
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: optimizedImageUrl,
      isPublished: isPublished || false, // default to false if not provided
    });

    // Delete temporary file
    try {
      fs.unlinkSync(req.file.path);
    } catch (unlinkError) {
      console.warn("Failed to delete temporary file:", req.file.path);
    }

    res.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    console.error("Error in addBlog:", error);

    // Clean up file if something failed
    if (req.file?.path) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (cleanupError) {
        console.error("Failed to clean up file:", req.file.path);
      }
    }

    res.status(500).json({
      success: false,
      message: "Internal server error while processing blog",
    });
  }
}; // import fs from "fs";
// import imagekit from "../configs/imageKit.js";
// import Blog from "../models/Blog.js";

// export const addBlog = async (req, res) => {
//   try {
//     let blogData;
//     try {
//       blogData = JSON.parse(req.body.blog);
//     } catch (parseError) {
//       return res.status(400).json({ success: false, message: "Invalid JSON in blog data" });
//     }

//     const { title, subTitle, description, category, isPublished } = blogData;
//     const imageFile = req.file;

//     // Check if all fields are present
//     if (!title || !description || !category || !imageFile) {
//       return res.status(400).json({ success: false, message: "Missing required fields" });
//     }

//     let fileBuffer;
//     try {
//       fileBuffer = fs.readFileSync(imageFile.path);
//     } catch (fsError) {
//       return res.status(500).json({ success: false, message: "Failed to read image file" });
//     }

//     // Upload the image to ImageKit
//     const response = await imagekit.upload({
//       file: fileBuffer,
//       fileName: imageFile.originalname,
//       folder: "/blogs",
//     });

//     // Optimization through imagekit transformation
//     const optimzationImageUrl = imagekit.url({
//       path: response.filePath,
//       transformation: [
//         { width: "1280" },
//         { format: "webp" },
//         { quality: "auto" },
//       ],
//     });

//     const image = optimzationImageUrl;
//     await Blog.create({
//       title,
//       subTitle,
//       description,
//       category,
//       image,
//       isPublished,
//     });

//     res.json({
//       success: true,
//       message: "Blog added successfully",
//     });
//   } catch (error) {
//     console.error("Error in addBlog:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
