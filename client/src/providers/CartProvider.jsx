import { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();


export const useCart = () => useContext(CartContext);

// Provider component to wrap the app
export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);



  // Function to remove items from the cart
  // const removeFromCart = (productId) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
  // };

const hideCart = () =>{
  setShowCart(false);
}

  return (
    <CartContext.Provider value={{ showCart, setShowCart , hideCart}}>
      {children}
    </CartContext.Provider>
  );
};
