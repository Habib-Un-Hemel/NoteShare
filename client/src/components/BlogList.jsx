import React, { useState } from "react"; // Import useState
import { blogCategories } from "../assets/assets";
import { motion } from "motion/react";

const BlogList = () => {
  const [menu, setMenu] = useState("All"); // Correct useState syntax

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 mx-10 relative">
        {/* category */}
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)} // Correct onClick syntax
              className={`cursor-pointer text-gray-500  ${
                menu === item && "text-white px-4 pt-0.5"
              }`}
            >
              {item}
              {menu === item && (
                <motion.div layoutId="underline"
                transition={{type: "spring", stiffness: 500, damping: 30}}
                 className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div>{/* blog cards */}</div>
    </div>
  );
};

export default BlogList;
