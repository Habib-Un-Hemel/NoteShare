import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Question types with their Google Drive folder links
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
    driveLink:
      "https://drive.google.com/drive/folders/1pN0NJCwO5CstJKcrg09EDakawyRBAFsE",
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
    driveLink:
      "https://drive.google.com/drive/folders/1pN0NJCwO5CstJKcrg09EDakawyRBAFsE",
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
    driveLink:
      "https://drive.google.com/drive/folders/1pN0NJCwO5CstJKcrg09EDakawyRBAFsE",
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
    driveLink:
      "https://drive.google.com/drive/folders/1pN0NJCwO5CstJKcrg09EDakawyRBAFsE",
  },
];

const Questions = () => {
  // Function to handle card click and open Google Drive folder
  const handleCardClick = (driveLink) => {
    window.open(driveLink, "_blank");
  };

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

      {/* Question Types Grid */}
      <div className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1D2B4C] mb-6 text-center md:text-left">
            Question Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {questionTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => handleCardClick(type.driveLink)}
                className={`block rounded-xl shadow-sm border-2 ${type.color} hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] cursor-pointer`}
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Questions;
