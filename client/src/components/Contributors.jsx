import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample contributor data - replace with actual contributor information
const contributors = [
  {
    id: "creator",
    name: "Md. Habibun Nabi Hemel",
    role: "Lead Developer & Founder",
    image: "hemel.png", // Replace with actual image path
    bio: "Created NoteShare to enhance collaborative learning.",
    linkedIn: "https://www.linkedin.com/in/habibun-nabi-hemel/",
    github: "https://github.com/Habib-Un-Hemel",
    featured: true,
  },
  {
    id: "contributor1",
    name: "Ishrak Hahim",
    role: "Content Contributor",
    image: "image.png", // Replace with actual image path
    bio: "Contributed high-quality notes for Computer Science.",
    linkedIn: "https://www.linkedin.com/in/habibun-nabi-hemel/",
    featured: false,
  },
  {
    id: "contributor2",
    name: "Siam Ferdous",
    role: "Content Contributor",
    image: "siam.png", // Replace with actual image path
    bio: "Provided guidance on technical architecture.",
    github: "https://github.com/Habib-Un-Hemel",
    featured: false,
  },
  {
    id: "contributor3",
    name: "Sakib Badhon",
    role: "Content Contributor",
    image: "bad.png", // Replace with actual image path
    bio: "Designed the intuitive user interface.",
    linkedIn: "https://www.linkedin.com/in/habibun-nabi-hemel/",
    featured: false,
  },
];

const ContributorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredContributor = contributors.find((c) => c.featured);
  const regularContributors = contributors.filter((c) => !c.featured);

  const visibleContributors = regularContributors.slice(
    currentIndex,
    currentIndex + 2
  );

  const nextContributors = () => {
    if (currentIndex + 2 < regularContributors.length) {
      setCurrentIndex(currentIndex + 2);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevContributors = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
    } else {
      setCurrentIndex(Math.max(0, regularContributors.length - 2));
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1D2B4C] mb-2">
            Our Contributors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Meet the talented individuals who made NoteShare possible.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Main contributor (featured) */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="p-0.5 bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C]">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center">
                    <img
                      src={featuredContributor.image}
                      alt={featuredContributor.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-[#2A4A9C]/20 mb-4 md:mb-0 md:mr-6"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/150?text=Creator";
                      }}
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-[#1D2B4C]">
                        {featuredContributor.name}
                      </h3>
                      <p className="text-[#2A4A9C] font-medium text-sm mb-1">
                        {featuredContributor.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        {featuredContributor.bio}
                      </p>

                      <div className="flex space-x-3 justify-center md:justify-start">
                        {featuredContributor.linkedIn && (
                          <a
                            href={featuredContributor.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                          </a>
                        )}
                        {featuredContributor.github && (
                          <a
                            href={featuredContributor.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary contributors with navigation arrows */}
          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visibleContributors.map((contributor) => (
                <div
                  key={contributor.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="p-4">
                    <div className="flex items-center">
                      <img
                        src={contributor.image}
                        alt={contributor.name}
                        className="w-16 h-16 rounded-full object-cover border border-[#2A4A9C]/10"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/100?text=Contributor";
                        }}
                      />
                      <div className="ml-3">
                        <h3 className="text-base font-bold text-[#1D2B4C]">
                          {contributor.name}
                        </h3>
                        <p className="text-[#2A4A9C] text-xs font-medium">
                          {contributor.role}
                        </p>
                        <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                          {contributor.bio}
                        </p>

                        <div className="flex space-x-2 mt-2">
                          {contributor.linkedIn && (
                            <a
                              href={contributor.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                              </svg>
                            </a>
                          )}
                          {contributor.github && (
                            <a
                              href={contributor.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            {regularContributors.length > 2 && (
              <>
                <button
                  onClick={prevContributors}
                  className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 focus:outline-none"
                  aria-label="Previous contributors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextContributors}
                  className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 focus:outline-none"
                  aria-label="Next contributors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
