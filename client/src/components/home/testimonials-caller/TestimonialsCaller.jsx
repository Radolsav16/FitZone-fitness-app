export default function TestimonialsCaller({
    setShowTestimonials,
}){
    return(
        <>
        <div className="bg-white text-black text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Your Story Matters—Share It With Us!</h1>
      

      <p className="text-lg mb-6">
        Your experiences inspire others and help us improve every day. Let your voice be heard!
      </p>
      
      <button
        className="bg-black text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition"
        onClick={() => setShowTestimonials(true)}
      >
        Send Testimonial
      </button>
    </div>
        
        </>
    )
}