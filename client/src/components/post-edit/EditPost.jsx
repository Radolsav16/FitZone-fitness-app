import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../default-input-item/Input.jsx";
import SelectElement from "../challanges/create-challange/SelectElement.jsx";
import { categoryOptions } from "../../utils/selectionData.js";
import axios from "axios";

export default function EditPost() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    content: "",
    image: "",
  });

  const params = useParams();

  const { id } = params;

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3030/blog/post/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.data;
      setFormData(result);
    })();
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3030/blog/post/${id}`, formData);
      navigate(`/fitzone/blog-details/${id}`);
    } catch (err) {
      navigate("/404");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 mt-20">
        <h1 className="text-4xl font-bold mb-6">Edit Post 📝</h1>
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-bold mb-2">
              Post Title
            </label>
            <Input
              type={"text"}
              name={"title"}
              placeholder={"Enter the post title"}
              onChangeHandler={onChange}
              value={formData.title}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-lg font-bold mb-2">
              Content
            </label>
            <Input
              type={"text"}
              name={"content"}
              placeholder={"Enter the content"}
              onChangeHandler={onChange}
              value={formData.content}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-lg font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Write the post description"
              onChange={onChange}
              value={formData.description}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-lg font-bold mb-2">
              Image URL
            </label>
            <Input
              type={"text"}
              name={"image"}
              placeholder={"Enter the Image Url"}
              onChangeHandler={onChange}
              value={formData.image}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="category" className="block text-lg font-bold mb-2">
              Category
            </label>
            <SelectElement
              options={categoryOptions}
              onChangeHandler={onChange}
              name={"category"}
              value={formData.category}
            />
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Edit Post
          </button>
        </form>
      </div>
    </>
  );
}
