import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("adminLogin received email:", email);
    // console.log("adminLogin received password:", password);

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({
        success: false,
        message: "Wrong Email or password",
      });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({
      success: true,
      message: "Login successful , enjoy",
      token,
    });
  } catch (error) {
    console.error("Error in adminLogin:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 }); // Retrieves all blogs and sorts by creation date in descending order
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("blog")
      .sort({ createdAt: -1 }); // Retrieves all comments, populates the associated blog, and sorts by creation date
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5); // Get 5 most recent blogs
    const blogs = await Blog.countDocuments(); // Get total count of all blogs
    const comments = await Comment.countDocuments(); // Get total count of all comments
    const drafts = await Blog.countDocuments({ isPublished: false }); // Get count of unpublished blogs (drafts)

    const dashboardData = {
      blogs,
      comments,
      drafts,
      recentBlogs,
    };

    res.json({ success: true, dashboardData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body; // Assuming the comment ID is sent in the request body
    // Assuming Comment is your Mongoose model for comments
    // const deletedComment = await Comment.findByIdAndDelete(id);
    await Comment.findByIdAndDelete(id);

    // if (!deletedComment) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Comment not found" });
    // }

    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body; // Assuming the comment ID is sent in the request body
    // Assuming Comment is your Mongoose model for comments
    // const updatedComment = await Comment.findByIdAndUpdate(
      await Comment.findByIdAndUpdate(
      id,
      { isApproved: true },
      // { new: true }
    );

    // if (!updatedComment) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Comment not found" });
    // }

    res.json({ success: true, message: "Comment approved successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
