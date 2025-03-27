import { usePosts } from "../../api/blogApi";
import BlogCard from "./blog-card/BlogCard";
import BlogFilters from "./blog-filters/BlogFilters";
import PostCreateCaller from "./post-create-caller/PostCreateCaller";

export default function Blog() {
  const { posts } = usePosts();

  

  return (
    <>
      <div className="p-8 bg-gray-100 mt-20">
        <h1 className="text-3xl font-bold text-center mb-6">Our Blog</h1>
        <BlogFilters />
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 w-full text-center p-5">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              No Post Yet!
            </h2>
            <p className="text-blue-600 mb-8">
              It seems like there are no post available right now. Scroll
              down to create one!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 animate-bounce text-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l-6-6m6 6l6-6"
              />
            </svg>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogCard key={p._id} post={p} />
            ))}
          </div>
        )}
      </div>

      <PostCreateCaller />
    </>
  );
}
