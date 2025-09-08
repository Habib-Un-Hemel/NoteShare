import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import logos from "../assets/logos.png"; // Updated to import logos.png

const Navbar = () => {
  const { navigate, token } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center"
            onClick={() => navigate("/")}
            role="button"
          >
            <img src={logos} alt="Academic Hub Logo" className="h-10 md:h-12" />
            <div className="ml-3 hidden md:block">
              <div className="text-lg font-bold text-[#1D2B4C]">NoteShare</div>
              <div className="text-xs text-gray-500">
                Knowledge Sharing Platform
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Updated with new items */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-[#2A4A9C] font-medium transition-colors"
            >
              Home
            </a>

            <a
              href="/notes"
              className="text-gray-700 hover:text-[#2A4A9C] font-medium transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Handwritten Notes
            </a>

            <a
              href="/questions"
              className="text-gray-700 hover:text-[#2A4A9C] font-medium transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Previous Year Questions
            </a>

            <a
              href="/videos"
              className="text-gray-700 hover:text-[#2A4A9C] font-medium transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              YouTube Videos
            </a>

            <a
              href="/lab"
              className="text-gray-700 hover:text-[#2A4A9C] font-medium transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
              Student Tutor
            </a>
          </div>

          {/* Admin/Login Button */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/admin")}
              className="flex items-center justify-center gap-2 rounded-full 
                      bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] hover:from-[#1D2B4C] hover:to-[#2A4A9C]
                      text-white px-5 py-2 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {token ? (
                <>
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  Dashboard
                </>
              ) : (
                <>
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
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Admin Login
                </>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="ml-4 md:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Updated with new items */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pb-3">
              <a
                href="/"
                className="text-gray-700 hover:text-[#2A4A9C] font-medium"
              >
                Home
              </a>
              <a
                href="/notes"
                className="text-gray-700 hover:text-[#2A4A9C] font-medium flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Handwritten Notes
              </a>
              <a
                href="/questions"
                className="text-gray-700 hover:text-[#2A4A9C] font-medium flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Previous Year Questions
              </a>
              <a
                href="/videos"
                className="text-gray-700 hover:text-[#2A4A9C] font-medium flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                YouTube Videos
              </a>
              <a
                href="/lab"
                className="text-gray-700 hover:text-[#2A4A9C] font-medium flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                Lab
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";

// const Navbar = () => {
//   const { navigate, token } = useAppContext();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div
//             className="flex items-center"
//             onClick={() => navigate("/")}
//             role="button"
//           >
//             <img
//               src={assets.logo}
//               alt="Academic Hub Logo"
//               className="h-10 md:h-12"
//             />
//             <div className="ml-3 hidden md:block">
//               <div className="text-lg font-bold text-[#1D2B4C]">
//                 Academic Hub
//               </div>
//               <div className="text-xs text-gray-500">
//                 Knowledge Sharing Platform
//               </div>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="/"
//               className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//             >
//               Home
//             </a>
//             <div className="relative group">
//               <button className="text-gray-700 hover:text-[#2A4A9C] font-medium flex items-center">
//                 Resources
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 ml-1"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block transition-all">
//                 <div className="py-1">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Course Materials
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Study Guides
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Assignment Help
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Research Resources
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//             >
//               Departments
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//             >
//               Events
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//             >
//               About
//             </a>
//           </div>

//           {/* Admin/Login Button */}
//           <div className="flex items-center">
//             <button
//               onClick={() => navigate("/admin")}
//               className="flex items-center justify-center gap-2 rounded-full
//                       bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] hover:from-[#1D2B4C] hover:to-[#2A4A9C]
//                       text-white px-5 py-2 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               {token ? (
//                 <>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//                     />
//                   </svg>
//                   Dashboard
//                 </>
//               ) : (
//                 <>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
//                     />
//                   </svg>
//                   Faculty Login
//                 </>
//               )}
//             </button>

//             {/* Mobile menu button */}
//             <button
//               onClick={toggleMenu}
//               className="ml-4 md:hidden focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-gray-700"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
//             <div className="flex flex-col space-y-4 pb-3">
//               <a
//                 href="/"
//                 className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//               >
//                 Resources
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//               >
//                 Departments
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//               >
//                 Events
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-[#2A4A9C] font-medium"
//               >
//                 About
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";

// const Navbar = () => {

//   const {navigate,token} =  useAppContext();
//   return (
//     <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer">
//       <img
//         onClick={() => navigate("/")}
//         src={assets.logo}
//         alt="logo"
//         className="w-32 sm:w-44"
//       ></img>
//       <button
//         onClick={() => navigate("/admin")}
//         className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 "
//       >
//         {token ? "Dashboard" : "Login"}
//         <img src={assets.arrow} className="w-3" alt="arrow"></img>
//       </button>
//     </div>
//   );
// };

// export default Navbar;
