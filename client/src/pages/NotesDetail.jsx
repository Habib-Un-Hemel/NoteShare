import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { coursesData } from "../data/coursesData";

const NotesDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the course that matches the id from the URL
    const foundCourse = coursesData.find((course) => course.id === id);

    // Simulate loading data
    setTimeout(() => {
      setCourse(foundCourse);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#2A4A9C]"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-gray-300 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/notes"
            className="bg-[#2A4A9C] text-white py-2 px-6 rounded-full hover:bg-[#1D2B4C] transition-colors inline-flex items-center"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Notes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Complexity badge color
  const getComplexityColor = (complexity) => {
    switch (complexity.toLowerCase()) {
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

  // Generate some mock note files
  const generateMockFiles = (count) => {
    return Array(count)
      .fill()
      .map((_, index) => ({
        id: `file-${index}`,
        name: `${course.title.split(":")[0]}_Note_${index + 1}.pdf`,
        size: `${Math.floor(Math.random() * 10) + 1} MB`,
        type: Math.random() > 0.3 ? "PDF" : "DOCX",
        date: new Date(
          Date.now() - Math.random() * 10000000000
        ).toLocaleDateString(),
      }));
  };

  const mockFiles = generateMockFiles(course.files || 5);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link
              to="/notes"
              className="flex items-center text-[#2A4A9C] hover:underline mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Notes
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1D2B4C] mb-4">
            {course.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className={`badge ${getComplexityColor(course.complexity)}`}>
              {course.complexity}
            </span>
            <span className="badge bg-blue-100 text-blue-800">
              {course.resources} Resources
            </span>
            {course.importance && (
              <span className="badge bg-purple-100 text-purple-800">
                {course.importance}
              </span>
            )}
          </div>

          <p className="text-gray-600 max-w-4xl">{course.description}</p>
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-white py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#1D2B4C] mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#2A4A9C]"
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
                Available Handwritten Notes
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockFiles.map((file) => (
                      <tr key={file.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 mr-3 ${
                                file.type === "PDF"
                                  ? "text-red-500"
                                  : "text-blue-500"
                              }`}
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
                            <span className="text-sm font-medium text-gray-900">
                              {file.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              file.type === "PDF"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {file.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {file.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {file.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a
                            href="#"
                            className="text-[#2A4A9C] hover:text-[#1D2B4C] inline-flex items-center text-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#1D2B4C] mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#2A4A9C]"
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
                Additional Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-[#2A4A9C] transition-colors">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Video Tutorials
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Watch complementary video explanations for this course.
                  </p>
                  <a
                    href="#"
                    className="text-[#2A4A9C] text-sm hover:underline inline-flex items-center"
                  >
                    View Videos
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
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-[#2A4A9C] transition-colors">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Practice Problems
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Test your understanding with practice problems and
                    exercises.
                  </p>
                  <a
                    href="#"
                    className="text-[#2A4A9C] text-sm hover:underline inline-flex items-center"
                  >
                    Solve Problems
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
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-[#2A4A9C] transition-colors">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Related Textbooks
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Find recommended textbooks and reading materials.
                  </p>
                  <a
                    href="#"
                    className="text-[#2A4A9C] text-sm hover:underline inline-flex items-center"
                  >
                    View Books
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotesDetail;
