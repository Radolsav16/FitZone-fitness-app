import {  useDeleteProductFromCart, useUserCart } from "../../../api/shopApi"
import { useUserContext } from "../../../contexts/UserContext"
import { useCart } from "../../../providers/CartProvider"
import { updateCartOnDelete } from "../../../utils/updateCart"

import {Link} from 'react-router'

export default function  ShopCart(){
  const {hideCart} = useCart()
  const {id ,userLoginHandler} = useUserContext()
  const {cart,setCart} = useUserCart(id)
  const { deleteProductFromCart } = useDeleteProductFromCart(id)

  

  const CalculateTotalPrice = () =>{
    return cart.reduce((total,item)=>{
      return total += Number(item.productId.price * item.quantity);
  },0)
  }
 

    return(
        <>
     <div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-gray-100 p-8 shadow-lg transition-transform transform translate-x-0 sm:translate-x-0 mt-20 flex flex-col sm:max-w-xs sm:right-0 overflow-hidden z-50">
  {/* Close Button */}
  <button
  className="absolute top-4 right-4 text-black text-xl font-bold hover:text-gray-600 transition focus:outline-none focus:ring-0"
  aria-label="Close"
  onClick={hideCart}
>
  &times;
</button>

  {/* Header */}
  <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>

  {/* Cart Items with Scrollbar */}
  <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
    <ul className="space-y-4">
      {cart.map((p) => (
       <li key={p.productId} className="flex items-center space-x-4 border-b pb-2">
       <img
         src={p.productId?.image}
         alt="Product Image"
         className="w-16 h-16 rounded"
       />
       <div className="flex-1">
         <h3 className="text-sm font-medium">{p.productId?.name}</h3>
         <p className="text-gray-500 text-xs">{p.productId?.category}</p>
         <p className="text-gray-900 font-semibold">${p.productId?.price}</p>
         <p className="text-gray-500 text-xs">Quantity: {p.quantity}</p> 
       </div>
       <button className="text-red-500 hover:text-red-700" onClick={()=>{
        deleteProductFromCart(p.productId);
        setCart([...cart.filter(o => o.productId != p.productId)])
        const updatedAuth = updateCartOnDelete(p.productId);
        userLoginHandler(updatedAuth)
       }}>❌</button>
     </li>
      ))}
    </ul>
  </div>


 <div className="pt-4 bg-white mb-20">
  <div className="flex justify-between text-lg font-semibold pl-2 pr-2">
    <p>Total:</p>
    <p>${CalculateTotalPrice().toFixed(2)}</p>
  </div>
  {/* Make the Checkout button a link */}
  <Link
    className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 transition text-center block"
    to="/fitzone/checkout"
  >
    Checkout
  </Link>
  {/* Continue Shopping link */}
  <Link
    className="w-full text-blue-600 mt-2 hover:underline text-center block"
    to="/fitzone/shop"
    onClick={hideCart}
  >
    Continue Shopping →
  </Link>
</div>
</div>
        </>
    )
}