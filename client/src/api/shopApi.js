import { useState , useEffect } from "react";
import { fetchApi } from "../utils/requester";

const baseUrl = 'http://localhost:3030';


export const useShop = () => {

     const [productId, setProductId] = useState("");
     const [showPreview, setShowPreview] = useState(false);
      
     const cancel = () => {
       setShowPreview(false);
     };
     return {
       cancel,
       productId,
       setProductId,
       showPreview,
       setShowPreview,
     }
}

export const useAddToCart = () => {

 const addToCart = async (userId,data) => {
   await fetchApi.post(baseUrl + `/add-to-cart/${userId}/${data.productId}`,{quantity:data.quantity},{
     "Content-Type": "application/json",
   });
 };


 return{
   addToCart
 }
};

export const useDeleteProductFromCart = (id) =>{
  

  const deleteProductFromCart = (productId) =>{
    fetchApi.del(baseUrl + `/delete-from-cart/${productId}/${id}`);
    
  }

  return {
    deleteProductFromCart
  }
}

export const useEmptyCart = (id) =>{
  

  const emtpyCart = async () =>{
    await fetchApi.del(baseUrl + `/emtpy-cart/${id}`);
  }

  return {
    emtpyCart
  }
}



export const useUserCart = (userId) =>{
  const [cart,setCart] = useState([])

  useEffect(()=>{
      (async ()=>{
          const result = await fetchApi.get(baseUrl + `/cart/${userId}`,{'Content-Type':'application/json'})
          setCart(result)
      })()
  },[userId])

  return {
      cart,
      setCart
  }
}

export const useCreateOrder = (userId)=> {
  
  const createOrder = async (data) =>{
    await fetchApi.post(baseUrl + `/order/${userId}`,data,{'Content-Type':'application/json'})
  }

  return {
    createOrder
  }
}

export const useOrderCount = () => {
  const [count,setCount] = useState(0);

  
  useEffect(()=>{
    (async ()=>{
        const result = await fetchApi.get(baseUrl + `/orders-count`,{'Content-Type':'application/json'})
        setCount(result)
    })()
},[])

return {
    count
   
}
}

export const useOrderRevenue = () =>{
  const [revenue,setRevenue] = useState(0);

  
  useEffect(()=>{
    (async ()=>{
        const result = await fetchApi.get(baseUrl + `/orders/revenue`,{'Content-Type':'application/json'})
        setRevenue(result)
    })()
},[])

return {
    revenue,
    setRevenue
}
}

export const useOrders = () =>{
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    (async ()=>{
        const result = await fetchApi.get(baseUrl + `/orders`,{'Content-Type':'application/json'})
        setOrders(result)
    })()
},[])



  return{
    orders
  }
}

export const useUserOrders = (id) =>{
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    (async ()=>{
        const result = await fetchApi.get(baseUrl + `/orders/${id}`,{'Content-Type':'application/json'})
        setOrders(result)
    })()
},[])



  return{
    orders
  }
}