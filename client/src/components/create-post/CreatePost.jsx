import React, { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("General");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      imageUrl,
      category,
      date: new Date().toLocaleDateString(),
      author: "Current User", // Replace with real user data later
    };
    console.log("Post Created:", newPost);
    // Add logic to send the newPost data to your backend or API
    setTitle("");
    setDescription("");
    setImageUrl("");
    setCategory("General");
    alert("Post created successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold mb-6">Create a New Post 📝</h1>
      <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-bold mb-2">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
            placeholder="Enter the post title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full p-2 border rounded-md"
            placeholder="Write the post description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-lg font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter the image URL (optional)"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-bold mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="General">General</option>
            <option value="Fitness">Fitness</option>
            <option value="Health">Health</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Motivation">Motivation</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
