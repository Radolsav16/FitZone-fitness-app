import Testimonial from "../models/Testimonials.js";

export async function createTestimonial(data){
    return await Testimonial.create(data)
}

export async function  getThreeTestimonails() {
    const testimonials = await Testimonial.aggregate([
        { $sample: { size: 3 } }, // Randomly select three testimonials
      ]);
  
      const populatedTestimonials = await Testimonial.populate(testimonials, {
        path: "author",
      });
  
      return populatedTestimonials; 
}