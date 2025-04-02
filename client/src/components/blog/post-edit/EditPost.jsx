import { useNavigate, useParams } from "react-router-dom";
import { categoryOptions } from "../../../utils/selectionData.js";
import { ErrorSetter } from "../../../utils/Errors.js";
import { useEditPost } from "../../../api/blogApi.js";
import SelectElement from "../../util/SelectElement.jsx";

export default function EditPost() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const { handleDataOnChange, SetErrors, errors, dataState, editPost } =
    useEditPost(id);

  const editPostHanlder = async (formData) => {
    const data = Object.fromEntries(formData);

    if (data.title === "") {
      return ErrorSetter(errors, SetErrors, "title", "Post Title is required!");
    } else if (data.description === "") {
      return ErrorSetter(
        errors,
        SetErrors,
        "description",
        "Description is required!"
      );
    } else if (data.content === "") {
      return ErrorSetter(errors, SetErrors, "content", "Content is required!");
    } else if (data.image === "") {
      return ErrorSetter(errors, SetErrors, "image", "Image is required!");
    } else if (data.category === "") {
      return ErrorSetter(
        errors,
        SetErrors,
        "category",
        "Category is required!"
      );
    }

    await editPost(data);
    navigate(`/fitzone/blog-details/${id}`);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 mt-20 bg-gray-50 rounded-lg shadow-lg mt-20">
        <form
          className="bg-white p-8 rounded-lg shadow-md"
          action={editPostHanlder}
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-lg font-bold mb-2 text-gray-700"
            >
              Post Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter the post title"
              onChange={handleDataOnChange}
              value={dataState.title}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors["title"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.title}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-lg font-bold mb-2 text-gray-700"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              placeholder="Enter a short description"
              value={dataState.description}
              onChange={handleDataOnChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            {errors["description"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.description}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-lg font-bold mb-2 text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Enter the main content of your post"
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-500"
              value={dataState.content}
              onChange={handleDataOnChange}
            ></textarea>
            {errors["content"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.content}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-lg font-bold mb-2 text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter the Image Url"
              value={dataState.image}
              onChange={handleDataOnChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors["image"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.image}
              </p>
            )}
          </div>

          {/* Category */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-lg font-bold mb-2 text-gray-700"
            >
              Category
            </label>
            <SelectElement
              options={categoryOptions}
              onChangeHandler={handleDataOnChange}
              name="category"
              value={dataState.category}
            />
            {errors["category"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.category}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 transition duration-300"
          >
            Edit Post
          </button>
        </form>
      </div>
    </>
  );
}
