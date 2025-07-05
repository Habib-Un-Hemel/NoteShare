import React, { useState, useEffect } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();
  const [filteredResults, setFilteredResults] = useState([]);

  // Combined filtering logic for both search and category
  useEffect(() => {
    const filterBlogs = () => {
      let results = [...blogs];

      // First filter by search input if present
      if (input.trim() !== "") {
        results = results.filter(
          (blog) =>
            blog.title.toLowerCase().includes(input.toLowerCase()) ||
            blog.category.toLowerCase().includes(input.toLowerCase())
        );
      }

      // Then filter by category if not "All"
      if (menu !== "All") {
        results = results.filter(
          (blog) => blog.category.toLowerCase() === menu.toLowerCase()
        );
      }

      setFilteredResults(results);
    };

    filterBlogs();
  }, [blogs, input, menu]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center gap-4 sm:gap-8 mx-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
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
        {filteredResults.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
