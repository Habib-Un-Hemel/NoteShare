import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup logic here
    console.log({ email, department, role });
    // Reset form or show success message
    setEmail("");
    setDepartment("");
  };

  return (
    <div className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F9FC] to-blue-50"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left column with image/pattern */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#2A4A9C] to-[#1D2B4C] text-white p-8 relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="dots"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="3" cy="3" r="1.5" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              <div className="relative h-full flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Stay Updated
                </h3>
                <p className="mb-6 text-blue-100">
                  Receive academic announcements, new course materials, and
                  important deadlines directly to your inbox.
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </div>
                    <span className="ml-3 text-sm">
                      Department-specific updates
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </div>
                    <span className="ml-3 text-sm">
                      Academic event notifications
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </div>
                    <span className="ml-3 text-sm">New resource alerts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column with form */}
            <div className="md:col-span-3 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#1D2B4C] mb-2">
                Subscribe to Academic Updates
              </h2>
              <p className="text-gray-600 mb-6">
                Join our academic community and receive tailored updates for
                your courses and department.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Academic Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@university.edu"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Department/Faculty
                  </label>
                  <select
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                    required
                  >
                    <option value="">Select your department</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="engineering">Engineering</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="biology">Biology</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="business">Business</option>
                    <option value="humanities">Humanities</option>
                    <option value="arts">Arts</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I am a:
                  </label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={role === "student"}
                        onChange={() => setRole("student")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">Student</span>
                    </label>

                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={role === "faculty"}
                        onChange={() => setRole("faculty")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">Faculty</span>
                    </label>

                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={role === "staff"}
                        onChange={() => setRole("staff")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">Staff</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition duration-300 flex items-center justify-center"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Subscribe
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By subscribing, you agree to receive academic-related
                  communications. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

// import React from "react";

// const Newsletter = () => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center space-y-2 my-32 ">
//       <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
//       <p className="md:text-lg text-gray-500/70 pb-8 ">
//         Subscribe to get the latest updates and exclusive content directly to
//         your inbox.
//       </p>
//       <form className="flex flex-center justify-between max-w-2xl w-full md:h-13 h-12 ">
//         <input className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rouned-r-none px-3 text-gray-500" type="text" placeholder="Enter your email" required />
//         <button className=" md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-1-none" type="submit">Subscribe</button>
//       </form>
//     </div>
//   );
// };

// export default Newsletter;
