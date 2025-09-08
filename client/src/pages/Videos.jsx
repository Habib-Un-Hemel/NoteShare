import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Video data with category as group titles
const videosData = [
  // Full courses
  {
    id: "cse110",
    title: "Cse110",
    description: "Full course playlist of Cse110.",
    youtubeId: "hBg3njn56Z0",
    playlistUrl:
      "https://www.youtube.com/watch?v=hBg3njn56Z0&list=PLvr0Ht-XkB_0KC2-N3hv0V3ib-Z6wKkAy",
    category: "Full courses",
  },
  {
    id: "cse111",
    title: "Cse111",
    description: "Full course playlist of Cse111.",
    youtubeId: "MNTvxGCEvQs",
    playlistUrl:
      "https://www.youtube.com/watch?v=MNTvxGCEvQs&list=PLvr0Ht-XkB_3QPWYBje6NqEs3QLj_0vpf",
    category: "Full courses",
  },
  {
    id: "cse320",
    title: "Cse320",
    description: "Full course playlist of Cse320.",
    youtubeId: "sHAl0vHN8M0",
    playlistUrl:
      "https://www.youtube.com/watch?v=sHAl0vHN8M0&list=PL2ETCwNgERAJfp-Zb06NIohcOOmelm1hj",
    category: "Full courses",
  },
  {
    id: "cse330",
    title: "Cse330",
    description: "Full course playlist of Cse330.",
    youtubeId: "84oGRFXPI4U",
    playlistUrl:
      "https://www.youtube.com/watch?v=84oGRFXPI4U&list=PL2ETCwNgERAJZ-5q9ZSeW3DJSn7fd0YwH",
    category: "Full courses",
  },
  {
    id: "cse341",
    title: "Cse341",
    description: "Full course playlist of Cse341.",
    youtubeId: "LMPynGQFL6E",
    playlistUrl:
      "https://www.youtube.com/watch?v=LMPynGQFL6E&list=PL2ETCwNgERAIJ7wC9rZrr0ZIppg8K8u_T",
    category: "Full courses",
  },

  // Quick revise
  {
    id: "cse421",
    title: "Cse421 (Sort - Arif Sir)",
    description: "Quick revise playlist for Cse421.",
    youtubeId: "ysgy8VOb-U4",
    playlistUrl:
      "https://www.youtube.com/watch?v=ysgy8VOb-U4&list=PLJh97ekrGHeKnnsQqBmP1gG4Pki1OLejM",
    category: "Quick revise",
  },
  {
    id: "cse420",
    title: "Cse420",
    description: "Quick revise playlist for Cse420.",
    youtubeId: "9WirSfTHPC8",
    playlistUrl:
      "https://www.youtube.com/watch?v=9WirSfTHPC8&list=PLvC1QCXXPlAVU0ZeGR8ca1X_q-j6I4kVm",
    category: "Quick revise",
  },
  {
    id: "mat215",
    title: "Mat215",
    description: "Quick revise playlist for Mat215.",
    youtubeId: "ZIabrM9-VYY",
    playlistUrl:
      "https://www.youtube.com/watch?v=ZIabrM9-VYY&list=PL63IQkIty91joaYSai_5431PQ9BP5pvew",
    category: "Quick revise",
  },

  // Non CSE
  {
    id: "mat216",
    title: "Mat216",
    description: "Non-CSE course Mat216 playlist.",
    youtubeId: "9KC0RFD47_w",
    playlistUrl:
      "https://www.youtube.com/watch?v=9KC0RFD47_w&list=PL63IQkIty91gupdtXVkCm5FN2X3X4RbSz",
    category: "Non CSE",
  },
  {
    id: "phy111",
    title: "Phy111",
    description: "Non-CSE course Phy111 playlist.",
    youtubeId: "1BT8ab0LfiA",
    playlistUrl:
      "https://www.youtube.com/watch?v=1BT8ab0LfiA&list=PLIjmBHoaE7NKVdlRssH2DQB_2OG75JEFy",
    category: "Non CSE",
  },

  // COD
  {
    id: "eco101",
    title: "Eco101",
    description: "COD course Eco101 playlist.",
    youtubeId: "ulsEapWc2LI",
    playlistUrl:
      "https://www.youtube.com/watch?v=ulsEapWc2LI&list=PL70WESolSYfZSlCPGjiY9QqrKLJ5Z6XH4",
    category: "COD",
  },

  // Elective
  {
    id: "cse443",
    title: "Cse443",
    description: "Elective course Cse443 playlist.",
    youtubeId: "PLnAOLIXtu9oMXNSXTnaQxVay6E-diNZNC",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLnAOLIXtu9oMXNSXTnaQxVay6E-diNZNC",
    category: "Elective",
  },
  {
    id: "cse437",
    title: "Cse437",
    description: "Elective course Cse437 playlist.",
    youtubeId: "6Dz_B7QHzYY",
    playlistUrl:
      "https://www.youtube.com/watch?v=6Dz_B7QHzYY&list=PLaMgAyoKt1PyQBVIFoint83NSTQQTe1Jo&pp=0gcJCXwEOCosWNin",
    category: "Elective",
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

  // Filter logic
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
            Educational Playlists
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Full courses, quick revisions, non-CSE subjects, COD, and electives
            — all in one place.
          </p>
        </div>
      </div>

      {/* Filter + Search */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search playlists..."
            className="w-full md:w-1/3 py-2 pl-4 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#2A4A9C]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
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

      {/* Playlist Grid */}
      <div className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          {filteredVideos.length === 0 ? (
            <p className="text-center text-gray-600">No playlists found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition overflow-hidden cursor-pointer"
                  onClick={() => setActiveVideo(video)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#1D2B4C] mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {video.description}
                    </p>
                    <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {video.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Active video modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">{activeVideo.title}</h2>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${
                  activeVideo.youtubeId
                }?list=${new URLSearchParams(
                  activeVideo.playlistUrl.split("?")[1]
                ).get("list")}`}
                title={activeVideo.title}
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Videos;
