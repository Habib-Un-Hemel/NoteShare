import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sample video data - replace with your actual data or API
const videosData = [
  {
    id: "v1",
    title: "Complier Design ",
    description:
      "Learn the basics of Complier Design Simulation and how they are used in computer science.",
    youtubeId: "25wVXwC9ZTM",
    category: "Computer Science",
    instructor: "Abu Hanif",
    duration: "12:25",
    views: "1K",
    popularity: "high",
  },
  {
    id: "v2",
    title: "Advanced Calculus Techniques",
    description:
      "Master differential equations and advanced integration techniques.",
    youtubeId: "WUvTyaaNkzM",
    category: "Mathematics",
    instructor: "Prof. Johnson",
    duration: "24:10",
    views: "8.5K",
    popularity: "medium",
  },
  {
    id: "v3",
    title: "Digital Circuit Design",
    description: "Learn how to design and implement digital circuits.",
    youtubeId: "M0mx8S05v60",
    category: "Electrical Engineering",
    instructor: "Dr. Williams",
    duration: "32:18",
    views: "15K",
    popularity: "high",
  },
  {
    id: "v4",
    title: "Neural Networks Explained",
    description:
      "Understanding the fundamentals of neural networks and deep learning.",
    youtubeId: "aircAruvnKk",
    category: "Artificial Intelligence",
    instructor: "Prof. Chen",
    duration: "28:45",
    views: "22K",
    popularity: "high",
  },
  {
    id: "v5",
    title: "Database Management Systems",
    description: "Learn about database design, SQL, and database optimization.",
    youtubeId: "4cWkVbC2bNE",
    category: "Computer Science",
    instructor: "Dr. Garcia",
    duration: "21:36",
    views: "9.2K",
    popularity: "medium",
  },
  {
    id: "v6",
    title: "Quantum Mechanics Principles",
    description: "An introduction to the principles of quantum mechanics.",
    youtubeId: "7u_n5YUmXhI",
    category: "Physics",
    instructor: "Prof. Kumar",
    duration: "42:15",
    views: "18K",
    popularity: "medium",
  },
  {
    id: "v7",
    title: "Network Security Fundamentals",
    description:
      "Understanding cybersecurity threats and protection mechanisms.",
    youtubeId: "inWWhr5tnEA",
    category: "Computer Science",
    instructor: "Dr. Thompson",
    duration: "35:20",
    views: "14K",
    popularity: "high",
  },
  {
    id: "v8",
    title: "Web Development with React",
    description: "Build modern web applications with React JS.",
    youtubeId: "w7ejDZ8SWv8",
    category: "Web Development",
    instructor: "Sarah Mitchell",
    duration: "29:45",
    views: "25K",
    popularity: "high",
  },
];

// Available categories
const categories = [
  "All",
  ...new Set(videosData.map((video) => video.category)),
];

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videosData);
  const [activeVideo, setActiveVideo] = useState(null);

  // Filter videos based on search term and category
  useEffect(() => {
    const filtered = videosData.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || video.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    setFilteredVideos(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D2B4C] mb-4">
            Educational Videos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your learning with our curated collection of educational
            YouTube videos covering various subjects and topics. Watch, learn,
            and excel in your studies.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#2A4A9C]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
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
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[#2A4A9C] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          {/* Active Video Player */}
          {activeVideo && (
            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Square video container */}
                  <div className="relative" style={{ paddingBottom: "100%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                      title={activeVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full object-cover"
                    ></iframe>
                  </div>

                  {/* Video details */}
                  <div className="p-6 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold text-[#1D2B4C] mb-2">
                          {activeVideo.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {activeVideo.description}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveVideo(null);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
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
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          {activeVideo.instructor}
                        </span>
                        <span className="flex items-center">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {activeVideo.duration}
                        </span>
                        <span className="flex items-center">
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          {activeVideo.views} views
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full ${
                            activeVideo.popularity === "high"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {activeVideo.popularity === "high"
                            ? "Popular"
                            : "Recommended"}
                        </span>

                        <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                          {activeVideo.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-300 mb-4"
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
              <h2 className="text-xl font-semibold text-gray-700">
                No Videos Found
              </h2>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden cursor-pointer group"
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      onError={(e) => {
                        // Fallback to medium quality if HD thumbnail isn't available
                        e.target.onerror = null;
                        e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
                      }}
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center group-hover:bg-black/40 transition-all">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#2A4A9C]"
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
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {video.views}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-[#1D2B4C] mb-1 line-clamp-2">
                        {video.title}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ml-2 flex-shrink-0 ${
                          video.popularity === "high"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {video.popularity === "high"
                          ? "Popular"
                          : "Recommended"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{video.instructor}</span>
                      <span className="flex items-center">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {video.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Videos;
