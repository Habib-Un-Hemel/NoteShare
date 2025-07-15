
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, image, category, _id, createdAt } = blog;
  const navigate = useNavigate();

  // Category-specific styling
  const getCategoryStyles = (cat) => {
    const lowerCat = cat.toLowerCase();

    if (lowerCat.includes("tech") || lowerCat === "technology") {
      return {
        bg: "bg-blue-100",
        text: "text-blue-700",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
      };
    } else if (lowerCat.includes("math") || lowerCat.includes("science")) {
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        ),
      };
    } else if (lowerCat.includes("finance") || lowerCat.includes("business")) {
      return {
        bg: "bg-amber-100",
        text: "text-amber-700",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      };
    } else {
      return {
        bg: "bg-purple-100",
        text: "text-purple-700",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
      };
    }
  };

  const categoryStyle = getCategoryStyles(category);
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Extract first 12 words for description
  const truncateDescription = (desc) => {
    // Remove HTML tags
    const plainText = desc.replace(/<[^>]*>?/gm, "");
    const words = plainText.split(" ").slice(0, 15).join(" ");
    return words.length < plainText.length ? `${words}...` : words;
  };

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="academic-card flex flex-col h-full group"
    >
      <div className="relative overflow-hidden">
        {/* Image with overlay on hover */}
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Category badge */}
        <div
          className={`absolute top-3 right-3 ${categoryStyle.bg} ${categoryStyle.text} px-2.5 py-1 rounded-full text-xs font-medium flex items-center`}
        >
          {categoryStyle.icon}
          {category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Date */}
        <div className="text-xs text-gray-500 mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {formattedDate}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1D2B4C] mb-2 group-hover:text-[#2A4A9C] transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Truncated description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
          {truncateDescription(description)}
        </p>

        {/* Read more link */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm font-medium text-[#2A4A9C] flex items-center">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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

          {/* Resource type indicator */}
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
            Academic Resource
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;


// import React from "react";
// import { useNavigate } from "react-router-dom"; // Correctly import useNavigate

// const BlogCard = ({ blog }) => {
//   const { title, description, image, category, _id } = blog;
//   const navigate = useNavigate(); // Initialize useNavigate

//   return (
//     <div
//       onClick={() => navigate(`/blog/${_id}`)}
//       className="w-full rounded-lg overflow-hidden shadow cursor-pointer bg-white hover:shadow-102 hover:shadow-primary/25 duration-300"
//     >
//       <img src={image} alt="" className="aspect-video"></img>
//       <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
//         {category}
//       </span>
//       <div className="p-5">
//         <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
//         <p className="mb-3 text-xs text-gray-600"
//         dangerouslySetInnerHTML={{"__html": description.slice(0, 80)}}></p>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
