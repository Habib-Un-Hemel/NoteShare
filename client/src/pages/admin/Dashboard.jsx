import React, { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });
  const [loading, setLoading] = useState(true);

  const { axios } = useAppContext();

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/admin/dashboard");

      if (data.success) {
        // Check if data.data exists, otherwise use the dashboardData directly
        const responseData = data.data || data.dashboardData || {};

        setDashboardData({
          blogs: responseData.blogs || 0,
          comments: responseData.comments || 0,
          drafts: responseData.drafts || 0,
          recentBlogs: responseData.recentBlogs || [],
        });
      } else {
        toast.error(data.message || "Failed to fetch dashboard data");
      }
    } catch (error) {
      console.error("Dashboard error:", error);
      toast.error(
        "Error fetching dashboard data: " + (error.message || "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#1D2B4C] mb-6">
          Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Card: Total Blogs */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm font-medium">Total Blogs</p>
                <h3 className="text-2xl font-bold text-gray-700">
                  {loading ? "..." : dashboardData.blogs}
                </h3>
              </div>
            </div>
          </div>

          {/* Stats Card: Comments */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm font-medium">Comments</p>
                <h3 className="text-2xl font-bold text-gray-700">
                  {loading ? "..." : dashboardData.comments}
                </h3>
              </div>
            </div>
          </div>

          {/* Stats Card: Drafts */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
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
              </div>
              <div className="ml-5">
                <p className="text-gray-500 text-sm font-medium">Draft Posts</p>
                <h3 className="text-2xl font-bold text-gray-700">
                  {loading ? "..." : dashboardData.drafts}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent blogs section */}
      <div>
        <h2 className="text-xl font-semibold text-[#1D2B4C] mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Recent Content
        </h2>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          {loading ? (
            <div className="p-12 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#2A4A9C]"></div>
            </div>
          ) : dashboardData.recentBlogs &&
            dashboardData.recentBlogs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Blog Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dashboardData.recentBlogs.map((blog, index) => (
                    <BlogTableItem
                      key={blog._id || index}
                      blog={blog}
                      index={index + 1}
                      fetchBlogs={fetchDashboardData}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500">No blogs found</p>
              <button
                onClick={() => fetchDashboardData()}
                className="mt-4 px-4 py-2 bg-blue-50 text-[#2A4A9C] rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
              >
                Refresh Data
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { assets, dashboard_data } from "../../assets/assets";
// import BlogTableItem from "../../components/admin/BlogTableItem";
// import { useAppContext } from "../../context/AppContext";
// import toast from "react-hot-toast";

// const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState({
//     blogs: 0,
//     comments: 0,
//     drafts: 0,
//     recentBlogs: [],
//   });

//   const { axios } = useAppContext(); // Assuming you have a context for axios

//   const fetchDashboardData = async () => {
//     try {
//       const { data } = await axios.get("/api/admin/dashboard");
//       data.success
//         ? setDashboardData(data.dashboardData)
//         : toast.error(data.message);
//     } catch (error) {
//       toast.error(
//         "An error occurred while fetching dashboard data: " + error.message
//       );
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();
//   });
//   return (
//     <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
//       <div className="flex flex-wrap gap-4">
//         <div className="flex items-center gap-4 bg-white p-4 min-2-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
//           <img src={assets.dashboard_icon_1} alt="" />
//           <div>
//             <p className="text-xl font-semibold text-gray-600">
//               {dashboardData.blogs}
//             </p>
//             <p className="text-gray-400 font-light">Blogs</p>
//           </div>
//         </div>
//         {/*  */}
//         <div className="flex items-center gap-4 bg-white p-4 min-2-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
//           <img src={assets.dashboard_icon_2} alt="" />
//           <div>
//             <p className="text-xl font-semibold text-gray-600">
//               {dashboardData.comments}
//             </p>
//             <p className="text-gray-400 font-light">Comments</p>
//           </div>
//         </div>
//         {/*  */}
//         <div className="flex items-center gap-4 bg-white p-4 min-2-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
//           <img src={assets.dashboard_icon_3} alt="" />
//           <div>
//             <p className="text-xl font-semibold text-gray-600">
//               {dashboardData.drafts}
//             </p>
//             <p className="text-gray-400 font-light">Drafts</p>
//           </div>
//         </div>
//       </div>
//       {/*  */}

//       <div>
//         <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
//           <img src={assets.dashboard_icon_4} alt="" />
//           <p>Latest Blogs</p>
//         </div>

//         <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
//           <table className="w-full text-sm text-gray-500">
//             <thead className="text-xs text-gray-600 text-left uppercase">
//               <tr>
//                 <th scope="col" className="px-2 py-4 xl:px-6">
//                   #
//                 </th>
//                 <th scope="col" className="px-2 py-4">
//                   Blog Title
//                 </th>
//                 <th scope="col" className="px-2 py-4 max-sm:hidden">
//                   Date
//                 </th>
//                 <th scope="col" className="px-2 py-4 max-sm:hidden">
//                   Status
//                 </th>
//                 <th scope="col" className="px-2 py-4">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {dashboardData.recentBlogs.map((blog, index) => {
//                 return (
//                   <BlogTableItem
//                     key={blog._id}
//                     blog={blog}
//                     index={index + 1}
//                     fetchBlogs={fetchDashboardData}
//                   />
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Dashboard;
