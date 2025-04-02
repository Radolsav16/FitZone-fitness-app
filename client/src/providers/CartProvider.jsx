import { createContext, useContext, useState } from "react";


const CartContext = createContext();


export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showOrderModal,setOrderModal] = useState(false);

const hideCart = () =>{
  setShowCart(false);
}

  return (
    <CartContext.Provider value={{ showCart, setShowCart , hideCart , showOrderModal , setOrderModal}}>
      {children}
    </CartContext.Provider>
  );
};
