import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import main from "../configs/ai.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    //checking all fields are present or not
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "missing required field" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    //uploading image to imagekit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    //optimized through imagekit URL transfromation
    const optimizedImageUrl = imagekit.url({
      //   src: response.url,
      path: response.filePath,
      transformation: [
        {
          quality: "auto",
          format: "webp",
          width: "1280",
          height: "600",
          crop: "maintain_ratio",
        },
      ],
    });
    const image = optimizedImageUrl;

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
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params; // Assuming blogId comes from URL parameters
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);

    //delete all comments assoiscated with the blog
    await Comment.deleteMany({ blog: id });

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body; // Assuming the blog ID is sent in the request body
    const blog = await Blog.findById(id);

    blog.isPublished = !blog.isPublished; // Toggle the isPublished status
    await blog.save(); // Save the updated blog

    res.json({ success: true, message: "Blog status updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    // Assuming Comment is your Mongoose model for comments
    await Comment.create({ blog, name, content });
    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 }); // Sort by creation date, most recent first
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;
    const content = await main(
      prompt +
        "paraphase the writting and structure it in a blog format, the marks distribution in a good manner, then what should be focused on, and what should be avoided."
    );
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
