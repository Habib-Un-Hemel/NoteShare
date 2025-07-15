import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  // Ensure course is defined before accessing properties
  if (!course) return null;

  // Function to determine complexity color
  const getComplexityColor = (complexity) => {
    switch (complexity?.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  // Function to format resources
  const getResourcesLabel = (resources) => {
    if (!resources) return "0";
    return resources === "All" ? "All" : resources;
  };

  return (
    <Link to={`/notes/${course.id}`} className="block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
        <div className="p-5">
          {/* Course code/name */}
          <h3 className="text-lg font-bold text-[#1D2B4C] mb-3">
            {course.title}
          </h3>

          {/* Tags row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Complexity tag */}
            <span className={`badge ${getComplexityColor(course.complexity)}`}>
              {course.complexity}
            </span>

            {/* Resources tag */}
            <span className="badge bg-blue-100 text-blue-800">
              {getResourcesLabel(course.resources)} Resources
            </span>

            {/* Importance tag */}
            {course.importance && (
              <span className="badge bg-purple-100 text-purple-800">
                {course.importance}
              </span>
            )}
          </div>

          {/* Short description */}
          <p className="text-gray-600 text-sm mb-4">
            {course.description ||
              "Handwritten notes and study materials available for this course."}
          </p>

          {/* Resources available info */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline mr-1"
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
              {course.files || "Multiple"} Files
            </span>
            <span className="text-xs bg-gray-100 py-1 px-2 rounded-full text-gray-600">
              View Notes
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
