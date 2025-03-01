import { useState } from "react";
import { categoryOptions } from "../../utils/selectionData";
import SelectElement from "../challanges/create-challange/SelectElement";
import Input from "../default-input-item/Input";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ErrorSetter } from "../../utils/Errors";


export default function CreatePost() {

  const navigate = useNavigate();

  const [data,setData] = useState({
    title:"",
    category:"",
    description:"",
    content:"",
    image:"",
  })

  const [errors, SetErrors] = useState({});



  const onChange = (e) =>{
    SetErrors({});
    setData({
      ...data,
      [e.target.name] : e.target.value 
    })
  }

  const onSubmit = async (e)=>{
    e.preventDefault()

    if(data.title === ''){
      return ErrorSetter(errors,SetErrors,"title","Post Title is required!");
    } else if(data.content === ''){
      return ErrorSetter(errors,SetErrors,"content","Post Content is required!");
    } else if(data.description === ''){
      return ErrorSetter(errors,SetErrors,"description","Post Description is required!");
    } else if(data.image === ''){
      return ErrorSetter(errors,SetErrors,"image","Post Image is required!");
    }else if(data.category === ''){
      return ErrorSetter(errors,SetErrors,"category","Post Category is required!");
    }


    try {
        await axios.post('http://localhost:3030/blog/create-post',data);
        navigate('/fitzone/blog')
    } catch (err) {
        navigate('/404')  
    }
  }

  
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold mb-6">Create a New Post 📝</h1>
      <form  className="bg-white p-6 rounded-lg shadow-md" onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-bold mb-2">
            Post Title
          </label>
          <Input type={"text"} name={"title"} placeholder={"Enter the post title"} onChangeHandler={onChange}/>
          {errors["title"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.title}
              </p>
            )}
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-bold mb-2">
            Content
          </label>
          <Input type={"text"} name={"content"} placeholder={"Enter the content"} onChangeHandler={onChange}/>
          {errors["content"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.content}
              </p>
            )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full p-2 border rounded-md"
            placeholder="Write the post description"
            onChange={onChange}
          />
           {errors["description"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.description}
              </p>
            )}
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-lg font-bold mb-2">
            Image URL
          </label>
          <Input type={"text"} name={"image"} placeholder={"Enter the Image Url"} onChangeHandler={onChange}/>
          {errors["image"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.image}
              </p>
            )}
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-bold mb-2">
            Category
          </label>
          <SelectElement options={categoryOptions} onChangeHandler={onChange} name={"category"}/>
          {errors["category"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.category}
              </p>
            )}
        </div>
        <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Post
              </button>
      </form>
    </div>
  );
}
