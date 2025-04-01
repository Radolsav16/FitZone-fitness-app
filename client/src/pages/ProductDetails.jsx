import { useState } from "react";
import { DateConverter } from "../utils/DateConverter";
import ShopReviewForm from "../components/shop/shop-review-form/ShopReviewForm";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../api/productApi";
import { useRating, useReviews } from "../api/reviewsApi";
import { useCart } from "../providers/CartProvider";
import ShopCart from "../components/shop/shop-cart/ShopCart";

const ProductDetails = () => {
  const {id:productId} = useParams() 
  const {product} = useProduct(productId);
  const {reviews,setReviews} = useReviews(productId)
  const {rating} = useRating(productId)
  const  {showCart} = useCart()


  

  const [showForm,setShowForm] = useState(false);

  const cancel = () => {
    setShowForm(false);
  }

  return (
    <>
{showCart && <ShopCart />}
{showForm && <ShopReviewForm  cancel = {cancel} productId={productId} setReviews = {setReviews} /> }

<div className="mx-auto max-w-4xl px-6 py-10 bg-white shadow-lg rounded-2xl mt-20"> 
      {/* Product Details Section */}
      <div className="border-b flex flex-col md:flex-row items-center mt-10 pb-6">
       
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-40 h-40 md:w-48 md:h-48 rounded-xl shadow-md object-cover"
        />
    
        <div className="flex flex-col text-center md:text-left md:ml-6">
          <div className="text-2xl md:text-3xl font-extrabold text-gray-900">{product.name}</div>
          <div className="text-gray-500 mt-2 text-lg">{product.description}</div>
          <div className="flex items-center justify-center md:justify-start mt-3">
            <div className="text-yellow-400 text-xl">
              {[...Array(rating)].map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <div className="ml-2 text-lg font-semibold text-gray-700">{rating}/5</div>
          </div>
          <div className="mt-3 text-2xl font-bold text-green-500">${Number(product.price).toFixed(2)}</div>
        </div>
      </div>

     {reviews.length > 0 ? <div className="mt-10">
        {reviews.map((review, index) => (
            <div key={index} className="border-b pb-6 mb-6 flex flex-col md:flex-row bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="md:w-1/4 text-left md:pr-6 mr-2 mb-4 md:mb-0 flex items-center">
            <Link to={`/fitzone/profile/${review.author._id}`}>
              <img 
                src={review.author.imageUrl} 
                alt={review.author.name} 
                className="w-14 h-14 rounded-full mr-4 shadow-md object-cover"
              />
              </Link>
              <div>
                <div className="font-semibold text-lg text-gray-900 ml-3">{review.author.name}</div>
                <div className="text-gray-500 text-sm ml-3">{DateConverter(review.createdAt)}</div>
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="flex items-center mb-2">
                {Array(review.rating).fill().map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
                <span className="ml-2 font-semibold text-gray-700">{review.rating}</span>
              </div>
              <div className="font-bold mb-2 text-gray-900 text-lg">{review.title}</div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">{review.review}</p>
            </div>
          </div>
        ))}
      </div> : 
      <div className="text-center text-gray-600 text-lg bg-gray-100 p-6 rounded-lg shadow-sm mt-5">
            No reviews yet. Be the first to review this product!
          </div>}
    

      {/* Reviews Section */}
      


      {/* Add Review Button */}
      {!showForm &&  
      <div className="mt-10 text-center">
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 focus:outline-none mb-20"
          onClick={() => setShowForm(true)}
        >
          Click here to add your review
        </button>
      </div>}
     
    </div>

    
          
    
   
    </>


  );
};

export default ProductDetails;