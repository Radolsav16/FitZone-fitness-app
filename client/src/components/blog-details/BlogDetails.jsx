import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "5 Tips to Improve Your Workout Routine 💪",
    description: "Learn how to boost your workout efficiency and reach your goals faster.",
    author: {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=1",
    },
    date: "Feb 5, 2025",
    content: "Are you stuck in your fitness journey? Here are five simple tips...",
    image: "https://via.placeholder.com/800x400",
    likes: 12,
    comments: [
      {
        id: "1",
        user: "Alice",
        text: "Great tips! Really helpful!",
        userImage: "https://i.pravatar.cc/150?img=5",
      },
      {
        id: "2",
        user: "Bob",
        text: "I’ve been doing this, and it works!",
        userImage: "https://i.pravatar.cc/150?img=6",
      },
    ],
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === "1");
  const [likes, setLikes] = useState(post ? post.likes : 0);
  const [comments, setComments] = useState(post ? post.comments : []);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => setLikes(likes + 1);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now().toString(),
        user: "You",
        text: newComment,
        userImage: "https://i.pravatar.cc/150?img=7", // Placeholder image for the new comment
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

//   if (!post) {
//     return (
//       <div className="max-w-4xl mx-auto p-6 mt-20">
//         <h1 className="text-3xl font-bold text-center">Post not found!</h1>
//         <Link to="/blog" className="block text-center mt-4 text-orange-500 underline">
//           ← Back to Blog
//         </Link>
//       </div>
//     );
//   }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 italic mb-4">{post.description}</p>
      <p className="text-gray-400 mb-6">
        By <span className="font-bold">{post.author.name}</span> on {post.date}
      </p>
      <p className="text-lg mb-6">{post.content}</p>

      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={handleLike}
          className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
        >
          Like ({likes})
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-4">Comments ({comments.length})</h3>
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="flex items-start space-x-4 border-b pb-2">
              <img
                src={comment.userImage}
                alt={comment.user}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold">{comment.user}</p>
                <p>{comment.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Add a Comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="4"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Write your comment here..."
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Submit Comment
        </button>
      </div>

      <Link to="/blog" className="block text-center mt-8 text-orange-500 underline">
        ← Back to Blog
      </Link>
    </div>
  );
}

