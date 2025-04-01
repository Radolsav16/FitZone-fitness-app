import { useState } from "react";
import { useProduct } from "../../../api/productApi";
import { useUserContext } from "../../../contexts/UserContext";
import {useNavigate} from 'react-router'
import { useRating } from "../../../api/reviewsApi";
import { Link } from "react-router";



export default function ShopPreview({ productId, cancel, addToCart }) {
  const { product } = useProduct(productId);
  const [quantity,setQantity] = useState(1)
  const {id} = useUserContext()
  const navigate = useNavigate()
  const {rating} = useRating(productId)
  console.log(rating)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-20">
  <div className="bg-white w-full max-w-md rounded shadow-lg p-4 relative">
    {/* Close Button */}
    <button
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
      onClick={cancel}
    >
      &times;
    </button>

    {/* Product Image */}
    <Link to={`/fitzone/product/details/${productId}`}>
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded mb-4"
    />
 </Link>
    {/* Product Name */}
    <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>

    {/* Star Rating Display */}
    <div className="flex justify-center md:justify-start mb-4 text-yellow-500">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-xl">★</span>
      ))}
      <span className="ml-2 font-semibold text-gray-700">{rating}/5</span>
    </div>

    {/* Product Description */}
    <p className="text-gray-700 mb-4 text-center md:text-left">{product.description}</p>
    <p className="text-gray-900 font-medium mb-4 text-center md:text-left">
      ${product.price?.toFixed(2)}
    </p>
   

    {/* Quantity Input */}
    <div className="mb-4">
      <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
        Quantity:
      </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={quantity}
        onChange={(e) => setQantity(e.target.value)}
        className="w-full border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    {/* Add to Cart Button */}
    <button
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full mb-2"
      onClick={() => {
        if (!id) {
          return navigate('/fitzone/login');
        }
        addToCart({ quantity: Number(quantity), productId: product._id });
        cancel();
      }}
    >
      Add to Cart
    </button>

    {/* Cancel Button */}
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      onClick={cancel}
    >
      Cancel
    </button>
  </div>
</div>
  );
}
