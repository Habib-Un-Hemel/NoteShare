import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets"; // Assuming this is your asset import path
import Quill from "quill"; // Import Quill for rich text editing
import "quill/dist/quill.snow.css"; // Import Quill's snow theme CSS

const AddBlog = () => {
  // Refs to hold the editor's container and the Quill instance
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // State management remains the same
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState(""); // This will be synced with Quill
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  // This useEffect hook initializes Quill once the component mounts
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      // Toolbar configuration
      const toolbarOptions = [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ];

      // Initialize Quill
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: "Write your content here...",
      });

      // Store the Quill instance in a ref
      quillRef.current = quill;

      // Event listener to sync Quill content with React state
      quill.on("text-change", (delta, oldDelta, source) => {
        if (source === "user") {
          const htmlContent = quill.root.innerHTML;
          setDescription(htmlContent);
        }
      });
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (quillRef.current) {
        quillRef.current.off("text-change");
      }
    };
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const blogData = {
      title,
      subTitle,
      description, // The description state now holds the HTML from Quill
      category,
      isPublished,
      image,
    };
    console.log("Submitting Blog Data:", blogData);
  };

  // Modified to interact with the Quill instance
  const generateContent = () => {
    console.log("Generating AI content...");
    const aiHtmlContent =
      "<p>This is <strong>AI-generated content</strong> based on the blog title. It discusses <ul><li>key aspects</li><li>of the topic</li></ul> in a structured manner.</p>";

    if (quillRef.current) {
      quillRef.current.clipboard.dangerouslyPasteHTML(aiHtmlContent);
      // After pasting, we also update the state directly
      setDescription(aiHtmlContent);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-y-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        {/* --- Other form fields remain unchanged --- */}
        <p>Upload thumbnail</p>
        <label htmlFor="image" className="cursor-pointer">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="Upload"
            className="mt-2 h-24 object-contain rounded"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="mt-4">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p className="mt-4">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        {/* --- MODIFIED Blog Description Section --- */}
        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10  pt-2 relative">
          {/* This div is the container for the Quill editor */}
          <div
            ref={editorRef}
            className="h-48 border border-gray-300 rounded"
          ></div>

          <button
            type="button"
            onClick={generateContent}
            className="absolute bottom-3 right-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
          >
            Generate with AI
          </button>
        </div>

        {/* --- Other form fields remain unchanged --- */}
        <p className="mt-4">Blog category</p>
        <select
          name="catergory"
          className=" max-w-lg mt-2 px-3 py-2 border border-gray-300 outline-none rounded text-gray-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Business">Business</option>
        </select>
        <div className="flex items-center gap-3 mt-6">
          <input
            type="checkbox"
            id="publish"
            className="w-4 h-4"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
          <label htmlFor="publish" className="text-gray-600">
            Publish Now
          </label>
        </div>
        <button
          type="submit"
          className="mt-8 bg-primary text-white py-2 px-8 rounded cursor-pointer"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
