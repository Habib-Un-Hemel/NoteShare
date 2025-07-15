import React from "react";
import { assets } from "../assets/assets";
import logos from "../assets/logos.png";

const Footer = () => {
  const academicFooterData = [
    {
      title: "Resources",
      links: [
        "Course Materials",
        "Lecture Notes",
        "Study Guides",
        "Research Papers",
        "Video Lectures",
      ],
    },
    {
      title: "Departments",
      links: [
        "Computer Science",
        "Engineering",
        "Mathematics",
        "Physics",
        "Business",
        "Humanities",
      ],
    },
    {
      title: "Student Support",
      links: [
        "Academic Calendar",
        "Office Hours",
        "Tutoring",
        "Career Services",
        "Library Resources",
      ],
    },
    {
      title: "Community",
      links: [
        "Faculty Directory",
        "Events",
        "Research Groups",
        "Alumni Network",
        "Contact Us",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
      name: "Facebook",
    },
    {
      icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
      name: "Twitter",
    },
    {
      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z",
      name: "LinkedIn",
    },
    {
      icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
      name: "GitHub",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-[#F7F9FC]">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-200">
          {/* Logo and about column - spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img
                src={logos}
                alt="Academic Hub Logo"
                className="h-10 md:h-12"
              />
              <div className=" hidden md:block">
                <div className="text-lg font-bold text-[#1D2B4C]">
                  NoteShare
                </div>

              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              An academic resource platform designed to facilitate knowledge
              sharing between faculty and students, enhancing the educational
              experience through collaborative learning.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#2A4A9C] bg-opacity-10 flex items-center justify-center text-[#2A4A9C] hover:bg-opacity-20 transition-all"
                  aria-label={social.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns - each column spans 1 on large screens */}
          {academicFooterData.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-lg text-[#1D2B4C] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#2A4A9C] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Academic Hub. All rights
              reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-[#2A4A9C]">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#2A4A9C]">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#2A4A9C]">
              Accessibility
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#2A4A9C]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Academic affiliations banner */}
      <div className="bg-[#1D2B4C] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white text-sm mb-4 md:mb-0">
              Affiliated with top educational institutions worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="text-white text-opacity-70 text-sm">
                University Partners
              </span>
              <span className="text-white text-opacity-70 text-sm">
                Research Collaborations
              </span>
              <span className="text-white text-opacity-70 text-sm">
                Industry Connections
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { assets, footer_data } from "../assets/assets";

// const Footer = () => {
//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
//       {/* colum */}
//       <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
//         <div>
//           <img src={assets.logo} alt="logo" className="w-32 sm:w-44"></img>

//           <p className="max-w-[410px] mt-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
//           {footer_data.map((section, index) => (
//             <div key={index}>
//               <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
//                 {section.title}
//               </h3>
//               <ul className="text-sm space-y-1">
//                 {section.links.map((link, i) => (
//                   <li key={i}>
//                     <a href="#" className="hover:underline transition">
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* para */}
//       <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
//         Copyright 2025 © NoteShare Hemel - All Right Reserved.
//       </p>
//     </div>
//   );
// };

// export default Footer;
