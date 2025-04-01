import { usePosts } from "../api/blogApi";
import BlogCard from "../components/blog/blog-card/BlogCard";
import BlogFilters from "../components/blog/blog-filters/BlogFilters";
import NoPosts from "../components/blog/no-posts/NoPosts";
import PostCreateCaller from "../components/blog/post-create-caller/PostCreateCaller";
import { useLocation } from "react-router";
import { useCart } from "../providers/CartProvider";
import ShopCart from "../components/shop/shop-cart/ShopCart";

export default function Blog(){
    const queryObj = new URLSearchParams(useLocation().search);
    const query = queryObj.get('searchedBy')

    const { posts } = usePosts(query)
    const {showCart} = useCart()

    
    return(
        <>
        {showCart && <ShopCart />}
         <div className="p-8 bg-gray-100 mt-20">
                <h1 className="text-3xl font-bold text-center mb-6">Our Blog</h1>
                <BlogFilters />
                {posts.length === 0 ? (
                <NoPosts/>
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
    )
}