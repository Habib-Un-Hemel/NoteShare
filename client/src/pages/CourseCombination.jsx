import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CourseCombination = () => {
  // Define simplified course options
  const courseOptions = [
    {
      id: "cs-opt1",
      name: "CS Option 1",
      image: "/public/option1.png",
    },
    {
      id: "cs-opt2",
      name: "CS Option 2",
      image: "/public/option2.png",
    },
    {
      id: "cs-opt3",
      name: "CS Option 3",
      image: "/public/option3.png",
    },
    {
      id: "cse-opt2",
      name: "CSE Option 2",
      image: "/public/option4.png",
    },
  ];

  // Track which option is selected to show the image
  const [selectedOption, setSelectedOption] = useState(null);

  // Toggle selected option
  const toggleOption = (optionId) => {
    if (selectedOption === optionId) {
      setSelectedOption(null);
    } else {
      setSelectedOption(optionId);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#1D2B4C] mb-4">
              Course Combinations
            </h1>
            <p className="text-gray-600">Explore CS and CSE course options</p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Left side - Toggle buttons */}
            <div className="w-full md:w-1/3">
              {courseOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`w-full mb-4 p-4 text-left rounded-lg shadow-md transition-all ${
                    selectedOption === option.id
                      ? "bg-blue-600 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{option.name}</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {selectedOption === option.id ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      )}
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Right side - Image display */}
            <div className="w-full md:w-2/3">
              {selectedOption ? (
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={
                      courseOptions.find((opt) => opt.id === selectedOption)
                        ?.image
                    }
                    alt={
                      courseOptions.find((opt) => opt.id === selectedOption)
                        ?.name
                    }
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <p className="mt-4 text-center text-gray-700 font-medium">
                    {
                      courseOptions.find((opt) => opt.id === selectedOption)
                        ?.name
                    }
                  </p>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-full">
                  <p className="text-gray-500 text-center">
                    Select an option from the left to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseCombination;
