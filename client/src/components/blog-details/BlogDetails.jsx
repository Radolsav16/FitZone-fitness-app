import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios  from "axios";
import DetailButton from "../challanges/challange-details/button/DetailButton";
import { DateConverter } from "../../utils/DateConverter";



export default function BlogDetails() {
  const { id } = useParams();
  const [comment,setComment] = useState('');
  const navigate = useNavigate()

  const [commentSection,setCommentSection] = useState(false);

  const [data, setData] = useState([]);

  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:3030/blog/post/${id}`);
      navigate('/fitzone/blog')
    } catch (err) {
      navigate('/404');
    }
  }

  const showComments = () =>{
    setCommentSection(oldState => !oldState);
  }

  const postComment = async() => {
    if(!comment){
      return navigate('404');
    }

    const data = {
      userId:'67b9b2ffd45b88e885017d0a',
      postId:id,
      comment
    }
    try {
        await axios.post('http://localhost:3030/blog/comments/',data)
        navigate('/fitzone/blog')
    } catch (err) {
      navigate('404');
    }
  }

  const comments = [
    {
      id: 1,
      userImage: "https://randomuser.me/api/portraits/men/1.jpg",
      user: "JohnDoe",
      text: "This is an amazing post! Really enjoyed reading it."
    },
    {
      id: 2,
      userImage: "https://randomuser.me/api/portraits/women/2.jpg",
      user: "JaneSmith",
      text: "I completely agree with your point of view. Well said!"
    },
    {
      id: 3,
      userImage: "https://randomuser.me/api/portraits/men/3.jpg",
      user: "MikeJohnson",
      text: "Interesting perspective. I hadn't thought about it that way before."
    }
  ]

  useEffect(() => {
   (async ()=>{
    const res = await axios.get(`http://localhost:3030/blog/post/${id}`,{
      headers:{
        'Content-Type':'application/json'
      }
    });
    const result = await res.data;
    setData(result)
   })()
  }, []);

   

  if (!data) {
    return navigate('/404')
  }


  

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 italic mb-4">{data.description}</p>
      <p className="text-gray-400 mb-6">
        By <span className="font-bold">Radolsav Todorov</span> on 02/24/2025
      </p>
      <p className="text-lg mb-6">{data.content}</p>

      <div className="flex items-center space-x-4 mb-8">
        <button
          // onClick={handleLike}
          className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
        >
          Like 
        </button>
      </div>

        <div className="mt-6 flex space-x-4">
                  {/* Edit Button */}
                  <Link
                    to={`/fitzone/post/edit/${data._id}`}
                    className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Edit Post
                  </Link>
                  <DetailButton label={"Delete Post"} onClick={deletePost}/>
                  <DetailButton label={commentSection ? 'Hide comments':'View comments'} onClick={showComments}/>

            
          </div>

          {commentSection ? 
          <>
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
                <small>{DateConverter(data.createdAt)}</small>
                <p>{comment.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Add a Comment</h3>
        <textarea
          rows="4"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />

            <DetailButton label={'Post Comment'} onClick={postComment}/>
      </div>
      </>
      :""}
      <Link to="/fitzone/blog" className="block text-center mt-8 text-orange-500 underline">
        ← Back to Blog
      </Link>
    </div>
  );
}

