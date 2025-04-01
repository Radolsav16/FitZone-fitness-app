import { useEffect, useState } from "react";
import { fetchApi } from "../utils/requester";
import { useFormState } from "../hooks/FormStateHook";


const baseUrl = "http://localhost:3030";

export const usePosts = (query) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(baseUrl + "/blog/posts",{
        "Content-Type": "application/json",
      },{
        filter:query
      });
      setPosts(result);
    })();
  }, [query]);

  return {
    posts,
    setPosts
  };
};

export const useLatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(baseUrl + "/blog/latest-posts", {
        "Content-Type": "application/json",
      });
      setPosts(result);
    })();
  }, []);

  return {
    posts,
    setPosts
  };
};

export const usePost = (id) => {
    const [post, setPost] = useState({});
  
    useEffect(() => {
      (async () => {
        const result = await fetchApi.get(`http://localhost:3030/blog/post/${id}`);
        setPost(result);
      })();
    }, [id]);
  
    return {
      post,
    };
  };



export const useCreatePost = () => {
  const createPost = (data, id) => {
    data.author = id;
    fetchApi.post(baseUrl + "/blog/create-post", data, {
      "Content-Type": "application/json",
    });
  };

  return {
    createPost,
  };
};


export const useEditPost = (id) => {

    
    const {errors , SetErrors, dataState ,handleDataOnChange,SetDataState} = useFormState({
      title: "",
      category: "",
      description: "",
      content: "",
      image: "",
    })

     useEffect(()=>{
                (async()=>{
                  const res = await fetchApi.get(baseUrl + `/blog/post/${id}`,{'Content-Type':'application/json'})
                  SetDataState(res);
                })()
            },[id])
  


    const editPost = (data) => {
         fetchApi.put(baseUrl + `/blog/post/${id}`, data, {
            "Content-Type": "application/json",
          });
    };
  
    return {
      editPost,
      errors,
      SetErrors,
      dataState,
      handleDataOnChange
    };
};


export const useDeletePost = () =>{
  const [showModal,setShowModal] = useState(false);

  const cancel = () =>{
    setShowModal(!showModal);
  }


  const deletePost = (id) =>{
    fetchApi.del(baseUrl + `/blog/post/${id}`);
    setShowModal(!showModal);
  }

  return {deletePost ,cancel , showModal , setShowModal}
}


export const useDetailsPost = (postId,userId) =>{
  const [showComments,setShowComments] = useState(false);
  const [comments,setComments] = useState([]);
  const [addComment,setAddComment] = useState(false);

  useEffect(()=>{
    (async()=>{
      const result = await fetchApi.get(baseUrl + `/blog/comments/${postId}`,{'Content-Type':'application/json'})
      setComments(result)
    })()
  },[])

  const comment = async (comment) =>{
    const result = await  fetchApi.post(baseUrl + '/blog/comment/',{postId,userId,comment},{'Content-Type':'application/json'})
    setComments(oldState => [...oldState , result]);
  }

  return {
    showComments,
    setShowComments,
    comment,
    comments,
    setAddComment,
    addComment
  }
}

export const useLikePost = (postId,userId) =>{

  const [likes,setLikes] = useState(Number)


  useEffect(()=>{
    (async ()=>{
      const result = await fetchApi.get(baseUrl + `/blog/likes/${postId}/`,{'Content-Type':'application/json'})
      setLikes(result);
    })()
  },[postId])



  const like = async () =>{
    await fetchApi.get(baseUrl + `/blog/like/${postId}/${userId}`,{'Content-Type':'application/json'})
    setLikes(oldState => oldState + 1);
  }

  return {
    like,
    likes
  }
}