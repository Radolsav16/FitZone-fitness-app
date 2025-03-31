import React, { useState } from "react";
import { Link } from "react-router";
import { useAllProducts, useDeleteProduct } from "../api/productApi";
import IsSureModal from "../components/util/is-sure-modal/IsSureModal";
import { useDeleteUser, useUsers } from "../api/userApi";
import { useChallanges, useDeleteChallange } from "../api/challangeApi";
import { useDeletePost, usePosts } from "../api/blogApi";
import { FiDollarSign } from "react-icons/fi";
import { DateConverter } from "../utils/DateConverter";
import { useOrderCount, useOrderRevenue } from "../api/shopApi";

const AdminPanel = () => {
  const { products, setProducts } = useAllProducts();
  const { users, setUsers } = useUsers();
  const { challanges, setChallanges } = useChallanges();
  const { posts, setPosts } = usePosts();

  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [preText, setPreText] = useState("");
  const [deleteFunction, setDeleteFunction] = useState(() => null);

  const {count} = useOrderCount()
  const {revenue} = useOrderRevenue()

  const cancel = () => {
    setShowModal(false);
  };

  const { deleteProduct } = useDeleteProduct();
  const { deleteChallange } = useDeleteChallange();
  const { deletePost } = useDeletePost();
  const { deleteUser } = useDeleteUser();

  const deleteProductHandler = (id) => {
    setShowModal(!showModal);
    setText("Delete Product");
    setPreText("Are you sure you want to delete this product?");

    setDeleteFunction(() => {
      return () => {
        deleteProduct(id);
        setShowModal(false);
        setProducts([...products.filter((p) => p._id != id)]);
      };
    });
  };
  const deleteChallangeHanlder = (id) => {
    setShowModal(!showModal);
    setText("Delete Challange");
    setPreText("Are you sure you want to delete this challange?");

    setDeleteFunction(() => {
      return () => {
        deleteChallange(id);
        setShowModal(false);
        setChallanges([...challanges.filter((c) => c._id != id)]);
      };
    });
  };

  const deletePostHanlder = (id) => {
    setShowModal(!showModal);
    setText("Delete Post");
    setPreText("Are you sure you want to delete this post?");

    setDeleteFunction(() => {
      return () => {
        deletePost(id);
        setShowModal(false);
        setPosts([...posts.filter((p) => p._id != id)]);
      };
    });
  };

  const deleteUserHanlder = (id) => {
    setShowModal(!showModal);
    setText("Delete User");
    setPreText("Are you sure you want to delete this user?");

    setDeleteFunction(() => {
      return () => {
        deleteUser(id);
        setShowModal(false);
        setUsers([...users.filter((u) => u._id != id)]);
      };
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8 mt-20">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <div className="bg-white rounded shadow p-4 mb-8">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <ul className="space-y-2">
            {users.length > 0 ? users.map((user) => (
              <li
                className="flex items-center justify-between bg-gray-200 p-2 rounded"
                key={user._id}
              >
                <Link to={`/fitzone/profile/${user._id}`}>
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.imageUrl}
                      alt={user.name}
                      className="w-12 h-12 rounded"
                    />
                    <span>{user.name}</span>
                  </div>
                </Link>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => {
                    deleteUserHanlder(user._id);
                  }}
                >
                  Delete
                </button>
              </li>
            )):<p className="font-bold mt-3 mb-3">Don't have users yet!</p>}
          </ul>
        </div>

        <div className="bg-white rounded shadow p-4 mb-8 mt-5">
          <h2 className="text-xl font-semibold mb-2">Challenges</h2>
          <ul className="space-y-2 mb-4">
            {challanges.length > 0 ? challanges.map((challange) => (
              <li
                className="flex items-center justify-between bg-gray-200 p-2 rounded"
                key={challange._id}
              >
                <Link
                  to={`/fitzone/challenges/details/${challange._id}`}
                  key={challange._id}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={challange.image}
                      alt={challange.name}
                      className="w-16 h-16 rounded"
                    />
                    <span>{challange.name}</span>
                  </div>
                </Link>
                <div className="flex space-x-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => {
                      deleteChallangeHanlder(challange._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )):<p className="font-bold mt-3 mb-3">Don't have challanges yet!</p>}
          </ul>
        </div>

        <div className="bg-white rounded shadow p-4 mb-8 mt-5">
          <h2 className="text-xl font-semibold mb-2">Posts</h2>
          <ul className="space-y-2 mb-4">
            {posts.length ? posts.map((p) => (
              <li
                className="flex items-center justify-between bg-gray-200 p-2 rounded"
                key={p._id}
              >
                <Link to={`/fitzone/blog-details/${p._id}`} key={p._id}>
                  <div className="flex items-center space-x-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-16 h-16 rounded"
                    />
                    <span>{p.title}</span>
                  </div>
                </Link>
                <div className="flex space-x-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => {
                      deletePostHanlder(p._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )):<p className="font-bold mt-3 mb-3">Don't have posts yet!</p>}
          </ul>
        </div>

        {showModal && (
          <IsSureModal
            cancel={cancel}
            deleteFunc={deleteFunction}
            navigatePath={"/fitzone/admin"}
            text={text}
            preText={preText}
          />
        )}

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Products</h2>

          {/* Table Headers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-gray-300 p-2 rounded font-semibold text-gray-700">
            <div>Name</div>
            <div>Price</div>
            <div className="hidden sm:block">Stock</div>
            <div className="hidden md:block">Date Created</div>
            <div className="hidden md:block">Image</div>
            <div className="hidden md:block">Actions</div>
          </div>

          {/* Table Rows */}
          <ul className="space-y-2 mb-4">
            {products?.map((product) => (
              <li
                key={product._id}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center bg-gray-200 p-2 rounded"
              >
                {/* Product Name */}
                <div className="font-bold">{product.name}</div>

                {/* Product Price */}
                <div className="font-bold">${product.price}</div>

                {/* Product Stock */}
                <div className="hidden sm:block font-bold">{product.stock}</div>

                {/* Date Created */}
                <div className="hidden md:block font-bold">
                  {DateConverter(product.createdAt)}
                </div>

                {/* Product Image */}
                <div className=" md:block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded"
                  />
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link
                    to={`/fitzone/product/edit/${product._id}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => {
                      deleteProductHandler(product._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Add Product Link */}
          <div className="text-right">
            <Link
              to={"/fitzone/add-product"}
              className="text-blue-500 hover:underline"
            >
              Add Product
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 m-10">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <FiDollarSign size={32} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <p className="text-2xl font-bold">${revenue.toFixed(2)}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-gray-500 text-sm">Total Orders</p>
            <p className="text-2xl font-bold">{count}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
