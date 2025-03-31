import { useState , useEffect } from "react";
import { fetchApi } from "../utils/requester";

const baseUrl = 'http://localhost:3030';


export const useShop = () => {
    const [page, setPage] = useState(1);
     const lastPage = Math.ceil(44 / 9);
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
       page,
       lastPage,
       setPage
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