import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="bg-white border-r border-gray-200 min-h-screen shadow-sm">
      <div className="py-6 px-4 border-b border-gray-100">
        <h2 className="text-lg font-bold text-[#1D2B4C]">Admin Panel</h2>
        <p className="text-xs text-gray-500 mt-1">Manage your content</p>
      </div>

      <div className="py-4">
        <NavLink
          end={true}
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3 px-6 mb-1 mx-2 rounded-lg transition-colors ${
              isActive
                ? "bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] text-white shadow-md"
                : "text-gray-600 hover:bg-blue-50"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="hidden md:inline-block font-medium">Dashboard</span>
        </NavLink>

        <NavLink
          end={true}
          to="/admin/addBlog"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3 px-6 mb-1 mx-2 rounded-lg transition-colors ${
              isActive
                ? "bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] text-white shadow-md"
                : "text-gray-600 hover:bg-blue-50"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="hidden md:inline-block font-medium">Add Blog</span>
        </NavLink>

        <NavLink
          end={true}
          to="/admin/listBlog"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3 px-6 mb-1 mx-2 rounded-lg transition-colors ${
              isActive
                ? "bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] text-white shadow-md"
                : "text-gray-600 hover:bg-blue-50"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="hidden md:inline-block font-medium">Blog Lists</span>
        </NavLink>

        <NavLink
          end={true}
          to="/admin/Comments"
          className={({ isActive }) =>
            `flex items-center gap-3 py-3 px-6 mb-1 mx-2 rounded-lg transition-colors ${
              isActive
                ? "bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] text-white shadow-md"
                : "text-gray-600 hover:bg-blue-50"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span className="hidden md:inline-block font-medium">Comments</span>
        </NavLink>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-center md:justify-start gap-3 text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="hidden md:inline-block">Documentation</span>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { assets } from "../../assets/assets";

// const Sidebar = () => {
//   return (
//     <div className="border-r border-gray-300 min-h-screen">
//       {" "}
//       {/* Right border added */}
//       <NavLink
//         end={true}
//         to="/admin"
//         className={({ isActive }) =>
//           `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
//             isActive ? "bg-primary/10 border-r-4 border-primary" : ""
//           }`
//         }
//       >
//         <img src={assets.home_icon} alt="" className="min-w-4 w-5" />
//         <p className="hidden md:inline-block">Dashboard</p>
//       </NavLink>
//       <NavLink
//         end={true}
//         to="/admin/addBlog"
//         className={({ isActive }) =>
//           `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
//             isActive ? "bg-primary/10 border-r-4 border-primary" : ""
//           }`
//         }
//       >
//         <img src={assets.add_icon} alt="" className="min-w-4 w-5" />
//         <p className="hidden md:inline-block">Add Blog</p>
//       </NavLink>
//       <NavLink
//         end={true}
//         to="/admin/listBlog"
//         className={({ isActive }) =>
//           `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
//             isActive ? "bg-primary/10 border-r-4 border-primary" : ""
//           }`
//         }
//       >
//         <img src={assets.list_icon} alt="" className="min-w-4 w-5" />
//         <p className="hidden md:inline-block">Blog Lists</p>
//       </NavLink>
//       <NavLink
//         end={true}
//         to="/admin/Comments"
//         className={({ isActive }) =>
//           `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
//             isActive ? "bg-primary/10 border-r-4 border-primary" : ""
//           }`
//         }
//       >
//         <img src={assets.comment_icon} alt="" className="min-w-4 w-5" />
//         <p className="hidden md:inline-block">Comments</p>
//       </NavLink>
//     </div>
//   );
// };

// export default Sidebar;
