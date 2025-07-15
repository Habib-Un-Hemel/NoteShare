// filepath: /Users/md.habibunnabihemel/Desktop/Projects_finalYear/NoteShare/client/src/pages/admin/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";
import logos from "../../assets/logos.png";

const Layout = () => {
  const { setToken, navigate } = useAppContext();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div
            className="flex items-center"
            onClick={() => navigate("/")}
            role="button"
          >
            <img src={logos} alt="NoteShare Logo" className="h-9" />
            <div className="ml-3">
              <div className="text-lg font-bold text-[#1D2B4C]">
                Admin Portal
              </div>
              <div className="text-xs text-gray-500">
                Manage your academic resources
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#2A4A9C] hidden sm:flex items-center gap-1"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Site
            </a>

            <button
              onClick={logout}
              className="bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] hover:from-[#1D2B4C] hover:to-[#2A4A9C] text-white py-2 px-5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-grow">
        <div className="w-16 md:w-64 flex-shrink-0">
          <Sidebar />
        </div>

        <main className="flex-grow p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

// import React from "react";
// import { assets } from "../../assets/assets";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../../components/admin/Sidebar";
// import Dashboard from "./Dashboard";
// import { useAppContext } from "../../context/AppContext";

// const Layout = () => {
//   const { axios, setToken, navigate } = useAppContext();

//   const logout = () => {
//     localStorage.removeItem("token");
//     axios.defaults.headers.common["Authorization"] = null;
//     setToken(null);
//     navigate("/");
//   };

//   return (
//     <>
//       <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200 shadow-md">
//         <img
//           src={assets.logo}
//           alt=""
//           className="w-32 sm:w-40 cursor-pointer"
//           onClick={() => navigate("/")}
//         />
//         <button
//           onClick={logout}
//           className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
//         >
//           Logout
//         </button>
//       </div>

//       <div className=" flex h-[calc(100vh - 70px)]">
//         <Sidebar />
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default Layout;
