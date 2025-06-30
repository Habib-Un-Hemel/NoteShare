import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
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
