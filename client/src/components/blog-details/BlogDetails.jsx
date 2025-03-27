import { useParams, Link, useNavigate } from "react-router-dom";
import { DateConverter } from "../../utils/DateConverter";
import { useDeletePost, usePost,  } from "../../api/blogApi";
import IsSureModal from "../is-sure-modal/IsSureModal";
import { motion } from "framer-motion";
import { MessageSquare, Edit, Trash } from "lucide-react";


export default function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { post } = usePost(id);



  const {showModal , setShowModal , cancel , deletePost} = useDeletePost(id);



  return (
    <>
    {showModal && <IsSureModal  cancel={cancel} 
    deleteFunc={deletePost}
     text={'Are you sure you  want to delete this post?'}
     preText={"Delete Post"}
      navigatePath={'/fitzone/blog'}/> }
    
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl overflow-hidden mt-20">
      {/* Creator Info */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={post.author?.imageUrl}
          alt={post.author?.name}
          className="w-9 h-10 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{post.author?.name}</h3>
          <p className="text-sm text-gray-500">{DateConverter(post.updatedAt)}</p>
        </div>
      </div>

      {/* Blog Post Image */}
      <img
        src={post.image}
        alt="Blog Post"
        className="w-full h-64 object-cover rounded-xl mb-4"
      />

      {/* Blog Content */}
      <div className="overflow-hidden break-words">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-600 mb-4">
          {post.description}
        </p>
        <p className="text-gray-800 leading-relaxed">
         {post.content}
        </p>
      </div>


      <div className="flex gap-4 mt-6">
      <Link 
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      to={`/fitzone/post/edit/${post._id}`}
      >
      <Edit size={16} /> Edit
    </Link>
      <button
      onClick={() => setShowModal(!showModal)}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition "
    >
        <Trash size={16} /> Delete
    </button>
   

</div>
      {/* Toggle Comments */}
      <div className="mt-6">
        <button
          className="flex items-center gap-2 text-blue-500"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageSquare size={20} />
          Show Comments
        </button>

      
          
      
      </div>
    </div>

      
    </>
  );
}
