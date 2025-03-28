import { useParams, Link, useNavigate } from "react-router-dom";
import { DateConverter } from "../../utils/DateConverter";
import { useDeletePost, useDetailsPost, usePost } from "../../api/blogApi";
import IsSureModal from "../is-sure-modal/IsSureModal";
import { MessageSquare, Edit, Trash } from "lucide-react";
import { useUserContext } from "../../contexts/UserContext";


export default function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { post } = usePost(id);
  const { id: userId } = useUserContext();

  const {
    showComments,
    setShowComments,
    comment,
    comments,
    setAddComment,
    addComment,
  } = useDetailsPost(id, userId);
  const { showModal, setShowModal, cancel, deletePost } = useDeletePost(id);

  const commentHandler = async (formData) => {
    const data = Object.fromEntries(formData);
    if (!data.comment) {
      return;
    }

    await comment(data.comment);
    navigate(`/fitzone/blog-details/${id}`);
  };

  return (
    <>
      {showModal && (
        <IsSureModal
          cancel={cancel}
          deleteFunc={deletePost}
          text={"Are you sure you  want to delete this post?"}
          preText={"Delete Post"}
          navigatePath={"/fitzone/blog"}
        />
      )}

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl overflow-hidden mt-20">
        {/* Creator Info */}
        <div className="flex items-center gap-4 mb-6">
          <Link to={`/fitzone/profile/${post.author?._id}`}><img
            src={post.author?.imageUrl}
            alt={post.author?.name}
            className="w-9 h-10 rounded-full"
          /></Link>
          <div>
            <h3 className="text-lg font-semibold">{post.author?.name}</h3>
            <p className="text-sm text-gray-500">
              {DateConverter(post.updatedAt)}
            </p>
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
          <p className="text-gray-600 mb-4">{post.description}</p>
          <p className="text-gray-800 leading-relaxed">{post.content}</p>
        </div>

        {post.author?._id == userId && (
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
        )}

        {/* Toggle Comments */}
        <div className="mt-6">
          <button
            className="flex items-center gap-2 text-blue-500 focus:outline-none focus:ring-0 border-none"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare size={20} />
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
        </div>

        {showComments ? (
          <>
            <div className="bg-gray-100 p-4 rounded-lg mb-8">
              {comments.length > 0 ? (
                <>
                  <h3 className="text-2xl font-bold mb-4">
                    Comments {comments.length}
                  </h3>
                  <ul className="space-y-4">
                    {comments.map((c) => (
                      <li
                        key={c._id}
                        className="flex items-start space-x-4 border-b pb-2"
                      >
                         <Link to={`/fitzone/profile/${c.userId?._id}`}>
                        <img
                          src={c.userId?.imageUrl}
                          alt={c.userId?.name}
                          className="w-9 h-10 rounded-full"
                        />
                        </Link>
                        <div>
                          <p className="font-bold">{c.userId?.name}</p>
                          <p>{c.comment}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex justify-end">
                    {!addComment && userId&& (
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        onClick={() => setAddComment(true)}
                      >
                        Add Comment
                      </button>
                    )}
                  </div>

                  {(userId, addComment) && (
                    <>
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <form action={commentHandler}>
                          <h3 className="text-2xl font-bold mb-4">
                            Add a Comment
                          </h3>
                          <textarea
                            rows="4"
                            name="comment"
                            className="w-full p-2 border rounded-md mb-4"
                            placeholder="Write your comment here..."
                          />
                          <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                          >
                            Post Comment
                          </button>
                        </form>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center h-48 bg-gray-100 rounded-lg shadow-md p-6 mt-20">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      No Comments Yet
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Be the first to share your thoughts!
                    </p>
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                      onClick={userId ? () => setAddComment(true):() => navigate('/fitzone/login')}
                    >
                      Add a Comment
                    </button>
                  </div>

                  {(userId && addComment) && (
                    <>
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <form action={commentHandler}>
                          <h3 className="text-2xl font-bold mb-4">
                            Add a Comment
                          </h3>
                          <textarea
                            rows="4"
                            name="comment"
                            className="w-full p-2 border rounded-md mb-4"
                            placeholder="Write your comment here..."
                          />
                          <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                          >
                            Post Comment
                          </button>
                        </form>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        <Link
          to="/fitzone/blog"
          className="block text-center mt-8 text-orange-500 underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </>
  );
}
