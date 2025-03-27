import { usePosts } from "../../api/blogApi";
import BlogCard from "./blog-card/BlogCard";
import BlogFilters from "./blog-filters/BlogFilters";
import PostCreateCaller from "./post-create-caller/PostCreateCaller";


export default function Blog() {
  
  const { posts } = usePosts()


  return (
    <>
     <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Our Blogs</h1>
      <BlogFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


      {posts.map(p => <BlogCard key={p._id} post = {p} />)}

      </div>

    

<PostCreateCaller />
     


    
    </div>

      
    

    </>
  );
}
