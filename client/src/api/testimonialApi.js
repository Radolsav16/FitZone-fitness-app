import { useState , useEffect } from "react";
import { fetchApi } from "../utils/requester";


const baseUrl = "http://localhost:3030";

export const useTestmonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(baseUrl + "/testimonials", {
        "Content-Type": "application/json",
      });
      setTestimonials(result);
    })();
  }, []);

  return {
    testimonials,
  };
};





export const useCreateTestimonial = () => {
  const createTestimonial = (data) => {
    fetchApi.post(baseUrl + "/create-testimonial", data, {
      "Content-Type": "application/json",
    });
  };

  return {
    createTestimonial,
  };
};
