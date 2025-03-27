import { useEffect, useState } from "react";
import { fetchApi } from "../utils/requester";
import { useFormState } from "../hooks/FormStateHook";


const baseUrl = "http://localhost:3030";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(baseUrl + "/blog/posts", {
        "Content-Type": "application/json",
      });
      setPosts(result);
    })();
  }, []);

  return {
    posts,
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


export const useDeletePost = (id) =>{
  const [showModal,setShowModal] = useState(false);

  const cancel = () =>{
    setShowModal(!showModal);
  }


  const deletePost = () =>{
    fetchApi.del(baseUrl + `/blog/post/${id}`);
    setShowModal(!showModal);
  }

  return {deletePost ,cancel , showModal , setShowModal}
}
