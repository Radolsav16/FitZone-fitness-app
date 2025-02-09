import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Improve Your Workout Routine 💪",
    author: {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=1",
    },
    date: "Feb 5, 2025",
    content:
      "Are you stuck in your fitness journey? Here are five simple tips to boost your workout efficiency and reach your goals faster...",
    image: "https://via.placeholder.com/600x300",
  },
  {
    id: 2,
    title: "Healthy Eating Habits for Active Lifestyles 🥗",
    author: {
      name: "Jane Smith",
      image: "https://i.pravatar.cc/150?img=2",
    },
    date: "Feb 3, 2025",
    content:
      "Nutrition plays a key role in fitness. In this blog, we’ll cover the best foods to fuel your body for workouts...",
    image: "https://via.placeholder.com/600x300",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">🏋️‍♂️ FitZone Blog</h1>

      {selectedPost ? (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
          <button
            className="text-orange-500 underline mb-4"
            onClick={() => setSelectedPost(null)}
          >
            ← Back to Blog List
          </button>
          <h2 className="text-3xl font-bold mb-2">{selectedPost.title}</h2>
          <p className="text-gray-400 mb-4">
            By {selectedPost.author.name} on {selectedPost.date}
          </p>
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-60 object-cover rounded-lg mb-6"
          />
          <p className="text-lg mb-6">{selectedPost.content}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-2">
                By <span className="font-bold">{post.author.name}</span>
              </p>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-400">{post.date}</span>
              </div>
              <button
                onClick={() => setSelectedPost(post)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
