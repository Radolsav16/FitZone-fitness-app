import { useState } from "react";
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
 ;
};
