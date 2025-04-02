import { useLatestPosts } from "../../../api/blogApi"
import {Link} from 'react-router'
export default function RecentlyPost(){
  const {posts} = useLatestPosts()
    return(
        <>
        <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-gray-800">Recently Posted in Blog</h2>
      <p className="text-gray-600 mt-2">Stay updated with the latest insights, stories, and trends!</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
     
      {posts.map(p =>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={p._id}>
          <Link to={`/fitzone/blog-details/${p._id}`}>
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-48 object-cover"
        />
       
        </Link>
  
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>
          <p className="text-gray-600 mt-2">
           {p.description}
          </p>
          <Link
            to={`/fitzone/blog-details/${p._id}`}
            className="inline-block mt-4 text-primary font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
  
      )}

    </div>
  </div>
</section>

        </>
    )
}