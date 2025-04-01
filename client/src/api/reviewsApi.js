import { useState,useEffect } from "react";
import { fetchApi } from "../utils/requester";

const baseUrl = "http://localhost:3030";


export const useCreateReview = () => {
  const createReview = async (data, userId,productId) => {
    data.author = userId;
    data.productId = productId
    return await fetchApi.post(baseUrl + "/create-review", data, {
      "Content-Type": "application/json",
    });
  };

  return {
    createReview,
  };
};



export const useReviews = (productId) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(baseUrl + `/reviews/${productId}`,{
        "Content-Type": "application/json",
      });
      setReviews(result);
    })();
  }, []);

  return {
    reviews,
    setReviews
  };
};

export const useRating = (productId) => {
    const [rating, setRating] = useState(0);
  
    useEffect(() => {
      (async () => {
        const result = await fetchApi.get(baseUrl + `/product/rating/${productId}`,{
          "Content-Type": "application/json",
        });
        setRating(result);
      })();
    }, []);
  
    return {
      rating,
    };
  };