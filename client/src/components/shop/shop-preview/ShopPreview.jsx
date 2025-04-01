import { useState } from "react";
import { useProduct } from "../../../api/productApi";
import { useUserContext } from "../../../contexts/UserContext";
import {useNavigate} from 'react-router'



export default function ShopPreview({ productId, cancel, addToCart }) {
  const { product } = useProduct(productId);
  const [quantity,setQantity] = useState(1)
  const {id} = useUserContext()
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-20">
    <div className="bg-white w-full max-w-md rounded shadow-lg p-4 relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        onClick={cancel}
      >
        &times;
      </button>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-gray-900 font-medium mb-4">
        ${product.price?.toFixed(2)}
      </p>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e)=>{
            setQantity(e.target.value)
          }}
          className="w-full border-gray-300 rounded px-2 py-1"
        />
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full mb-2" onClick={()=>{
        if(!id){
          return navigate('/fitzone/login')
        }
        addToCart({quantity:Number(quantity),productId:product._id})
        cancel()
      }}>
        Add to Cart
      </button>
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
