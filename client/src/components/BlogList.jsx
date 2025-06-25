import React, { useState } from "react"; // Import useState
import { blogCategories } from "../assets/assets";

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
                <div className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"></div>
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
