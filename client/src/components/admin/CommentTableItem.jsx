import React from "react";
import { assets } from "../../assets/assets"; // Assuming assets are exported from this path

const CommentTableItem = ({ comment, fetchComments }) => {
  // Destructuring properties from the comment object
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  // Placeholder function for approving a comment
  const handleApprove = async () => {
    // Here you would typically make an API call to update the comment status
    // await axios.post('/api/comments/approve', { id: _id });
    console.log(`Approving comment ${_id}`);
    fetchComments(); // Refresh the comments list after approval
  };

  // Placeholder function for deleting a comment
  const handleDelete = async () => {
    // Here you would typically make an API call to delete the comment
    // await axios.post('/api/comments/delete', { id: _id });
    console.log(`Deleting comment ${_id}`);
    fetchComments(); // Refresh the comments list after deletion
  };

  return (
    <tr className="border-y border-gray-300">
      {/* Column for Blog Title & Comment Details */}
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b>: {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b>: {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b>: {comment.content}
      </td>

      {/* Column for Date */}
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>

      {/* Column for Actions (Approve/Delete) */}
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            // Show a clickable checkmark if not approved
            <img
              onClick={handleApprove}
              src={assets.tick_icon}
              className="w-5 hover:scale-110 transition-all cursor-pointer"
              alt="Approve"
            />
          ) : (
            // Show an "Approved" badge if already approved
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={handleDelete}
            src={assets.bin_icon}
            alt="Delete"
            className="w-5 hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
