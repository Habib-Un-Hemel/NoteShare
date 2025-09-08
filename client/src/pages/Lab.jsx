import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import taData from "../data/taData";

const Lab = () => {
  const [openCourses, setOpenCourses] = useState({});

  const toggleCourse = (course) => {
    setOpenCourses((prev) => ({
      ...prev,
      [course]: !prev[course],
    }));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#1D2B4C] mb-4">Lab TAs</h1>
            <p className="text-gray-600">
              Find your Teaching Assistant for lab sessions
            </p>
          </div>

          {/* Information Banner with Image */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden my-8">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-[#1D2B4C] mb-3">
                  BRAC University Student Tutors
                </h2>
                <p className="text-gray-600 mb-4">
                  Student tutors are available to assist you with your
                  coursework. Find the right tutor for your course and section
                  below. All tutoring sessions are held in Building 12B.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <h3 className="font-medium text-blue-700 mb-1">
                    Tutoring Hours
                  </h3>
                  <p className="text-blue-600 text-sm">
                    Saturday to Thursday: 8:00 AM - 5:00 PM (Offline)
                    <br />
                    Saturday to Thursday: 8:00 PM - 11:00 PM (Online)
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <img
                  src="/public/st.png"
                  alt="BRAC University Student Tutors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm font-medium">
                      Have questions? Email: name@bracu.ac.bd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {Object.keys(taData).map((course) => (
              <div key={course} className="mb-4">
                <button
                  onClick={() => toggleCourse(course)}
                  className="w-full bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-between items-center"
                >
                  <h2 className="text-xl font-semibold text-[#2A4A9C]">
                    {course}
                  </h2>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openCourses[course] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openCourses[course] && (
                  <div className="bg-white mt-2 rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Initial
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Sections
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Room
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Email
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {taData[course].map((ta, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                {ta.initial}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                {ta.section}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                {ta.name}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                {ta.room}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600">
                                <a
                                  href={`mailto:${ta.email}`}
                                  className="hover:underline"
                                >
                                  {ta.email}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lab;
