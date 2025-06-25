import React, { useState } from "react"; // Import useState
import { blog_data, blogCategories } from "../assets/assets";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";

const BlogList = () => {
  const [menu, setMenu] = useState("All"); // Correct useState syntax

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center gap-4 sm:gap-8 mx-10 relative">
        {/* category */}
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)} // Correct onClick syntax
              className={`cursor-pointer text-gray-500 ${
                menu === item && "text-white px-4 pt-0.5"
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {/* blog cards */}
        {blog_data
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
