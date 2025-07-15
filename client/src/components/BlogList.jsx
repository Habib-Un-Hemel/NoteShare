import React, { useState, useEffect } from "react";
import { blogCategories } from "../assets/assets";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();
  const [filteredResults, setFilteredResults] = useState([]);
  const [sortBy, setSortBy] = useState("newest");

  // Combined filtering logic for search, category and sorting
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

      // Sort results
      switch (sortBy) {
        case "newest":
          results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          break;
        case "oldest":
          results.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
          break;
        case "az":
          results.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "za":
          results.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }

      setFilteredResults(results);
    };

    filterBlogs();
  }, [blogs, input, menu, sortBy]);

  return (
    <div className="bg-[#F7F9FC] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2B4C] mb-3">
            Academic Resources
          </h2>
          <p className="text-gray-600 max-w-2xl text-center mb-8">
            Browse our comprehensive collection of course materials, lecture
            notes, and educational resources created by faculty members.
          </p>

          {/* Filter and Sort Controls */}
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setMenu(item)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      menu === item
                        ? "text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item}
                    {menu === item && (
                      <motion.div
                        layoutId="filterPill"
                        className="absolute inset-0 bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] rounded-full -z-10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="w-full max-w-4xl flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">
              {filteredResults.length === 0
                ? "No resources found"
                : `Showing ${filteredResults.length} resource${
                    filteredResults.length !== 1 ? "s" : ""
                  }`}
            </p>

            {input && (
              <div className="flex items-center bg-blue-50 text-blue-800 px-3 py-1.5 rounded-full text-sm">
                <span>Search: "{input}"</span>
                <button
                  onClick={() => {
                    const { setInput } = useAppContext();
                    setInput("");
                  }}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Blog Cards Grid */}
        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResults.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No resources found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;

// import React, { useState, useEffect } from "react";
// import { blog_data, blogCategories } from "../assets/assets";
// import BlogCard from "./BlogCard";
// import { motion } from "motion/react";
// import { useAppContext } from "../context/AppContext";

// const BlogList = () => {
//   const [menu, setMenu] = useState("All");
//   const { blogs, input } = useAppContext();
//   const [filteredResults, setFilteredResults] = useState([]);

//   // Combined filtering logic for both search and category
//   useEffect(() => {
//     const filterBlogs = () => {
//       let results = [...blogs];

//       // First filter by search input if present
//       if (input.trim() !== "") {
//         results = results.filter(
//           (blog) =>
//             blog.title.toLowerCase().includes(input.toLowerCase()) ||
//             blog.category.toLowerCase().includes(input.toLowerCase())
//         );
//       }

//       // Then filter by category if not "All"
//       if (menu !== "All") {
//         results = results.filter(
//           (blog) => blog.category.toLowerCase() === menu.toLowerCase()
//         );
//       }

//       setFilteredResults(results);
//     };

//     filterBlogs();
//   }, [blogs, input, menu]);

//   return (
//     <div className="container mx-auto px-4">
//       <div className="flex justify-center gap-4 sm:gap-8 mx-10 relative">
//         {blogCategories.map((item) => (
//           <div key={item} className="relative">
//             <button
//               onClick={() => setMenu(item)}
//               className={`cursor-pointer text-gray-500 ${
//                 menu === item && "text-white px-4 pt-0.5"
//               }`}
//             >
//               {item}
//               {menu === item && (
//                 <motion.div
//                   layoutId="underline"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                   className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"
//                 ></motion.div>
//               )}
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
//         {filteredResults.map((blog) => (
//           <BlogCard key={blog._id} blog={blog} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogList;
