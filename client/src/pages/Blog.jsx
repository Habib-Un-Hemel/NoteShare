import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [relatedResources, setRelatedResources] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState("");

  // Function to fetch the blog data
  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/blog/${id}`);

      if (data.success) {
        setData(data.blog);

        // Also fetch related content by category
        try {
          const allBlogs = await axios.get("/api/blog/all");
          if (allBlogs.data.success) {
            const related = allBlogs.data.blogs
              .filter(
                (blog) =>
                  blog.category === data.blog.category &&
                  blog._id !== data.blog._id
              )
              .slice(0, 3);
            setRelatedResources(related);
          }
        } catch (error) {
          console.error("Error fetching related content:", error);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch the comments
  const fetchComments = async () => {
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to add a comment
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blog: id,
        name,
        content,
      });
      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Fetch data on initial load
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  // Function to get category badge styles
  const getCategoryStyles = (category) => {
    if (!category) return { bg: "bg-purple-100", text: "text-purple-700" };

    const lowerCat = category.toLowerCase();
    if (lowerCat.includes("tech") || lowerCat === "technology") {
      return { bg: "bg-blue-100", text: "text-blue-700" };
    } else if (lowerCat.includes("math") || lowerCat.includes("science")) {
      return { bg: "bg-green-100", text: "text-green-700" };
    } else if (lowerCat.includes("finance") || lowerCat.includes("business")) {
      return { bg: "bg-amber-100", text: "text-amber-700" };
    } else {
      return { bg: "bg-purple-100", text: "text-purple-700" };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2A4A9C]"></div>
        </div>
      </div>
    );
  }

  return data ? (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      <Navbar />

      {/* Hero section with title and metadata */}
      <div className="bg-gradient-to-r from-[#1D2B4C] to-[#2A4A9C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Category badge */}
            <div
              className={`inline-block ${getCategoryStyles(data.category).bg} ${
                getCategoryStyles(data.category).text
              } px-3 py-1 rounded-full text-sm font-medium mb-6`}
            >
              {data.category}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
              {data.title}
            </h1>

            {/* Subtitle */}
            {data.subTitle && (
              <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                {data.subTitle}
              </p>
            )}

            {/* Publication info */}
            <div className="flex items-center justify-center gap-4 text-sm text-blue-100">
              <div className="flex items-center">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {Moment(data.createdAt).format("MMMM Do YYYY")}
              </div>
              <div className="hidden sm:flex items-center">
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
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                {comments.length}{" "}
                {comments.length === 1 ? "Comment" : "Comments"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Feature image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article content */}
          <article className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div
              className="rich-text prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>

            {/* Share buttons */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <p className="font-medium text-[#1D2B4C] mb-3 flex items-center">
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share this resource
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Related resources section */}
          {relatedResources.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2B4C] mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
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
                Related Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedResources.map((resource) => (
                  <Link
                    key={resource._id}
                    to={`/blog/${resource._id}`}
                    className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-[#1D2B4C] group-hover:text-[#2A4A9C] transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2">
                        {Moment(resource.createdAt).format("MMM D, YYYY")}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comments section */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#1D2B4C] mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              Comments ({comments.length})
            </h2>

            {/* Comments list */}
            {comments.length > 0 ? (
              <div className="space-y-6 mb-10">
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 relative"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#2A4A9C] text-white flex items-center justify-center font-medium">
                        {comment.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">{comment.name}</h4>
                        <p className="text-xs text-gray-500">
                          {Moment(comment.createdAt).fromNow()}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-300 mb-3"
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
                <p className="text-gray-500 mb-2">No comments yet</p>
                <p className="text-gray-400 text-sm">
                  Be the first to share your thoughts!
                </p>
              </div>
            )}

            {/* Add comment form */}
            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-[#1D2B4C] mb-6">
                Leave a Comment
              </h3>
              <form onSubmit={addComment} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Department (Optional)
                  </label>
                  <select
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
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
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your thoughts, questions, or feedback about this resource..."
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#2A4A9C] to-[#1D2B4C] hover:from-[#1D2B4C] hover:to-[#2A4A9C] text-white py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center"
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
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  Submit Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2A4A9C] mx-auto mb-6"></div>
          <p className="text-gray-500">Loading resource...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { assets, blog_data, comments_data } from "../assets/assets";
// import Navbar from "../components/Navbar";

// import Moment from "moment"; // Import Moment.js for date formatting
// import Footer from "../components/Footer";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const Blog = () => {
//   const { id } = useParams();

//   const { axios } = useAppContext();

//   const [data, setData] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [name, setName] = useState("");
//   const [content, setContent] = useState("");

//   const fetchBlogData = async () => {
//     // const data = blog_data.find((item) => item._id === id);
//     // setData(data);
//     try {
//       const { data } = await axios.get(`/api/blog/${id}`);
//       console.log("Fetched Blog Data:", data); // <- Add this
//       data.success ? setData(data.blog) : toast.error(data.message);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const { data } = await axios.post("/api/blog/comments", { blogId: id });
//       console.log("Fetched id:", id); // <- Add this
//       console.log("Fetched Comments:", data.comments); // <- Add this
//       if (data.success) {
//         console.log("Fetched Comments:", data.comments); // <- Add this
//         setComments(data.comments);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // const fetchComments = async () => {
//   //   setComments(comments_data);
//   // };

//   // Modify the addComment function to refresh comments after adding
//   const addComment = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/api/blog/add-comment", {
//         blog: id,
//         name,
//         content,
//       });
//       if (data.success) {
//         toast.success(data.message);
//         setName("");
//         setContent("");
//         fetchComments(); // Refresh comments after adding a new one
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   //call the function to display the blog data
//   useEffect(() => {
//     fetchBlogData();
//     fetchComments();
//   }, []);

//   // const fetchComments = async () => {
//   //   setComments(comments_data);
//   // };

//   return data ? (
//     <div className="relative ">
//       <img
//         src={assets.gradientBackground}
//         alt=""
//         className="absolute -top-50 -z-1 opacity-50"
//       ></img>
//       <Navbar></Navbar>

//       <div className="text-center mt-20 text-gray-600">
//         <p className="text-primary py-4 font-medium">
//           Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
//         </p>
//         {/* <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800 text-center"> */}
//         <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800 text-center">
//           {data.title}
//         </h1>
//         <h2 className="my-5 max-w-lg truncate mx-auto text-center">
//           {data.subTitle}
//         </h2>
//         <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
//           Hemel
//         </p>
//       </div>

//       {/*  */}
//       <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
//         <img src={data.image} alt="" className="rouned-3xl mb-5"></img>
//         {/* <div
//           className="rich-text max-2-3xl mx-auto"
//           dangerouslySetInnerHTML={{ __html: data.description }}
//         ></div> */}
//         <div
//           className="rich-text max-w-3xl mx-auto text-justify"
//           dangerouslySetInnerHTML={{ __html: data.description }}
//         ></div>
//       </div>

//       {/* comment section */}
//       <div className="mt-14 mb-10 max-w-3xl mx-auto">
//         <p className="font-semibold mb-4">Comments({comments.length})</p>

//         <div className="flex flex-col gap-4">
//           {/* Map through comments and display them */}
//           {comments.map((item, index) => (
//             <div
//               key={index}
//               className="relative bg-primary/2 border border-primary/5 max-w-2xl rounded text-gray-600"
//             >
//               <div className="flex items-center gap-2 mb-2">
//                 <img
//                   src={assets.user_icon}
//                   alt="User Icon"
//                   className="w-6 h-6"
//                   style={{ display: "inline-block" }}
//                 />

//                 <p className="font-medium">{item.name}</p>
//               </div>
//               <p>{item.content}</p>
//               <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
//                 {Moment(item.createdAt).fromNow()}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* comment box */}

//         {/* Add Comment Section */}
//         <div className="max-w-3xl mx-auto p-4">
//           {" "}
//           {/* Add padding */}
//           <p className="font-semibold mb-4 flex items-center gap-2">
//             <img
//               src={assets.comment_icon}
//               alt="Comment Icon"
//               className="w-5 h-5 inline-block"
//             />
//             Add your comment
//           </p>
//           <form
//             onSubmit={addComment}
//             className="flex flex-col items-start gap-4 max-w-lg bg-white p-4 rounded-lg shadow-sm" // Add background and shadow
//           >
//             <input
//               ad
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               type="text"
//               placeholder="Name"
//               required
//               className="w-full p-2 border border-gray-300 rounded outline-none"
//             />

//             <textarea
//               onChange={(e) => setContent(e.target.value)}
//               value={content}
//               placeholder="Comment"
//               className="w-full p-2 border border-gray-300 rounded outline-none h-48"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* share button */}
//         {/* Share Buttons */}
//         <div className="my-24 max-w-3xl mx-auto">
//           <p className="font-semibold my-4">
//             Share this article on social media
//           </p>
//           <div className="flex">
//             <img src={assets.facebook_icon} width={50} alt="Facebook" />
//             <img src={assets.twitter_icon} width={50} alt="Twitter" />
//             <img src={assets.facebook_icon} width={50} alt="Facebook" />
//           </div>
//         </div>
//       </div>

//       <Footer></Footer>

//       {/* You can render `data` content here if needed */}
//     </div>
//   ) : (
//     <div>Loading....</div>
//   );
// };

// export default Blog;
