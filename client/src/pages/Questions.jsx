import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Question types with their images and descriptions
const questionTypes = [
  {
    id: "quiz",
    title: "Quiz Papers",
    icon: "📝",
    complexity: "Easy",
    color: "bg-green-100 border-green-200",
    textColor: "text-green-800",
    description: "Practice with previous quiz papers from various courses",
    count: 35,
  },
  {
    id: "mid",
    title: "Mid Term Papers",
    icon: "📚",
    complexity: "Medium",
    color: "bg-orange-100 border-orange-200",
    textColor: "text-orange-800",
    description: "Study with past mid-term examination papers",
    count: 48,
  },
  {
    id: "final",
    title: "Final Exam Papers",
    icon: "🎓",
    complexity: "Hard",
    color: "bg-red-100 border-red-200",
    textColor: "text-red-800",
    description: "Prepare for finals with previous year papers",
    count: 42,
  },
  {
    id: "other",
    title: "Other Question Sets",
    icon: "🧩",
    complexity: "Varied",
    color: "bg-purple-100 border-purple-200",
    textColor: "text-purple-800",
    description: "Additional problem sets and practice questions",
    count: 23,
  },
];

// Mock courses for search functionality
const courses = [
  "CSE101: Introduction to Programming",
  "CSE201: Data Structures",
  "CSE301: Algorithms",
  "CSE401: Computer Networks",
  "CSE501: Artificial Intelligence",
  "MAT101: Calculus I",
  "MAT201: Linear Algebra",
  "PHY101: Physics I",
  "EEE201: Digital Electronics",
  "ECO101: Microeconomics",
  "BUS201: Business Management",
];

const Questions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const results = courses.filter((course) =>
        course.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(results);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D2B4C] mb-4">
            Previous Year Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access previous year question papers including quizzes, mid-terms,
            finals, and other practice questions to help you prepare for your
            exams.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by course code or name..."
                className="w-full py-3 px-4 bg-transparent outline-none text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-4 text-gray-400 hover:text-gray-600"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {showSearchResults && (
              <div className="absolute w-full mt-1 bg-white rounded-xl border border-gray-200 shadow-lg z-10">
                {filteredCourses.length > 0 ? (
                  <ul className="py-2">
                    {filteredCourses.map((course, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-50">
                        <Link
                          to={`/questions/search?q=${encodeURIComponent(
                            course
                          )}`}
                          className="block text-gray-700 hover:text-[#2A4A9C]"
                          onClick={() => setShowSearchResults(false)}
                        >
                          {course}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-center">
                    No courses found matching "{searchTerm}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Question Types Grid */}
      <div className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1D2B4C] mb-6 text-center md:text-left">
            Question Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {questionTypes.map((type) => (
              <Link
                to={`/questions/${type.id}`}
                key={type.id}
                className={`block rounded-xl shadow-sm border-2 ${type.color} hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-4xl">{type.icon}</span>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${type.color} ${type.textColor}`}
                    >
                      {type.complexity}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1D2B4C] mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {type.count} sets
                    </span>
                    <span
                      className={`text-sm font-medium ${type.textColor} flex items-center`}
                    >
                      View Papers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Additions */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#1D2B4C] mb-6 text-center md:text-left">
              Recently Added Papers
            </h2>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="p-4 hover:bg-gray-50">
                    <Link
                      to="/questions/final"
                      className="flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">
                          CSE10{item}: Final Exam{" "}
                          {new Date().getFullYear() - item}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Added {item} day{item !== 1 ? "s" : ""} ago
                        </p>
                      </div>
                      <span className="text-[#2A4A9C] text-sm flex items-center">
                        View
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Questions;
