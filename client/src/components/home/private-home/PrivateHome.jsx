import { useState } from "react";
import HeroCreatePost from "../hero-create-post/HeroCreatePost";
import HeroExercise from "../hero-exercises/HeroExercises";
import HeroJoinChallanges from "../hero-join-challanges/HeroJoinChallanges";
import HeroShop from "../hero-shop/HeroShop";
import PromoSection from "../promo-section/PromoSection";
import RecentlyPost from "../recently-posts/RecentlyPost";
import Testimonials from "../testimonials/Testimonials";
import TestimonialsForm from "../testimonials-form/TestimonailsForm";
import TestimonialsCaller from "../testimonials-caller/TestimonialsCaller";
import ShopCart from "../../shop/shop-cart/ShopCart";

export default function PrivateHome(){
    const [showTestimonials,setShowTestimonials] = useState(false);
    
    return(
        <>
        <RecentlyPost />
        <PromoSection />
        <HeroShop />
        <HeroCreatePost />
        <HeroJoinChallanges />
        <HeroExercise />

        <TestimonialsCaller  setShowTestimonials={setShowTestimonials} showTestimonials={showTestimonials} />

        {/* {showTestimonials &&  <TestimonialsForm setShowTestimonials={setShowTestimonials} showTestimonials={showTestimonials} /> } */}
        {showTestimonials &&  <ShopCart /> }


        
        <Testimonials />


       
   
   

    
       
        </>
    )
}