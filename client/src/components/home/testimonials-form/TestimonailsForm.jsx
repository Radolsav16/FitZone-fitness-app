import { useCreateTestimonial } from "../../../api/testimonialApi";
import { useUserContext } from "../../../contexts/UserContext";

export default function TestimonialsForm({
  hideTestimonialForm 
}){ 
    const { id } = useUserContext()

 
    const {createTestimonial} = useCreateTestimonial()

    const formTestimonailsHanlder = async (formData) =>{
        const data = Object.fromEntries(formData);
        
        data.author = id;

        await createTestimonial(data)
        hideTestimonialForm()
    }
    
    return(
        <>
         <div className="fixed top-0 right-0 w-full sm:w-80 h-full bg-gray-100 p-8 shadow-lg transition-transform transform translate-x-0 mt-20" >
          <button
            className="absolute top-4 right-4 text-black text-xl font-bold hover:text-gray-600 transition"
            aria-label="Close"
            onClick={()=>hideTestimonialForm()}
          >
            &times;
          </button>
          <form action={formTestimonailsHanlder}>
            <div className="mb-4">
              <label htmlFor="testimonial" className="block text-sm font-medium mb-2">
                Your Testimonial
              </label>
              <textarea
                id="testimonial"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Write your testimonial..."
                rows="4"
                name="testimonial"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
        
        </>
    )
}