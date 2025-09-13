import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="relative pt-8 pb-16 bg-gradient-to-b from-[#F7F9FC] to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-[5%] w-24 h-24 rounded-full bg-blue-500 opacity-5"></div>
      <div className="absolute top-40 right-[10%] w-32 h-32 rounded-full bg-orange-500 opacity-5"></div>
      <div className="absolute bottom-10 left-[15%] w-40 h-40 rounded-full bg-green-500 opacity-5"></div>

      {/* Admin Info - Positioned in the top right corner */}
      <div className="absolute top-4 right-4 z-20">
        <div className="p-3 bg-white border border-blue-200 rounded-xl shadow-sm text-left max-w-xs">
          <h3 className="text-xs font-semibold text-gray-700 mb-1">
            Admin Access
          </h3>
          <div className="text-xs bg-gray-50 p-2 rounded-lg">
            <p className="mb-1">
              <Link to="/admin" className="text-blue-600 hover:underline">
                /admin
              </Link>
            </p>
            <p className="mb-1">
              <span className="font-medium">Email:</span> admin@example.com
            </p>
            <p>
              <span className="font-medium">Password:</span> tiger
            </p>{" "}
            <p>
              <span className="font-medium">For Demo Purposes Only !</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mt-16 mb-12">
          {/* Badge announcing feature */}
          <div
            className="inline-flex items-center justify-center gap-3 px-5 py-2 mb-6 
                        bg-gradient-to-r from-blue-50 to-indigo-50 
                        border border-blue-200 rounded-full text-sm text-blue-700"
          >
            <span className="text-yellow-500 text-xl">★</span>
            <p className="font-medium">Academic Excellence Hub</p>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1D2B4C] leading-tight">
            Knowledge{" "}
            <span className="text-[#2A4A9C] relative">
              Sharing
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-[#FF8C42]"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 C25,8 75,8 100,0 L100,8 L0,8 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>{" "}
            Platform for Students & Faculty
          </h1>

          {/* Subheadline */}
          <p className="my-8 text-lg text-gray-600 max-w-3xl mx-auto">
            Your comprehensive academic resource center where faculty share
            course materials, guidelines, assignments and students collaborate
            through notes, discussions, and valuable resources.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="badge badge-primary">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Course Materials
            </div>
            <div className="badge badge-secondary">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Assignments
            </div>
            <div className="badge badge-success">
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Discussions
            </div>
          </div>

          {/* Stats counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto gap-4">
            <div className="text-center p-4 rounded-lg bg-white shadow-sm">
              <div className="text-3xl font-bold text-[#2A4A9C]">50+</div>
              <div className="text-gray-600 text-sm">Courses</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white shadow-sm">
              <div className="text-3xl font-bold text-[#FF8C42]">200+</div>
              <div className="text-gray-600 text-sm">Students</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white shadow-sm">
              <div className="text-3xl font-bold text-[#36B37E]">2+</div>
              <div className="text-gray-600 text-sm">Faculty</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white shadow-sm">
              <div className="text-3xl font-bold text-purple-600">300+</div>
              <div className="text-gray-600 text-sm">Resources</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative max-w-2xl mt-12 mx-auto">
            <form
              onSubmit={onSubmitHandler}
              className="flex shadow-lg rounded-full overflow-hidden"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search courses, materials, or topics..."
                className="w-full px-6 py-4 outline-none text-gray-700"
                required
              />
              <button
                type="submit"
                className="bg-[#2A4A9C] hover:bg-[#1D2B4C] text-white px-8 py-4 transition-all flex items-center"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </form>

            {input && (
              <button
                onClick={onClear}
                className="mt-3 mx-auto block text-sm text-gray-600 border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-50 transition-all"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
