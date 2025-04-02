import { useState } from "react";
import HeroBeginOverlay from "../components/home/hero-begin-overlay/HeroBeginOverlay";
import StatsSection from "../components/home/stats-section/StatsSection";
import ShopCart from "../components/shop/shop-cart/ShopCart";
import SuccesfullOrderModal from "../components/shop/succesfull-order-modal/SuccesfullOrderModal";
import { useUserContext } from "../contexts/UserContext";
import { useCart } from "../providers/CartProvider";
import PromoSection from "../components/home/promo-section/PromoSection";
import HeroShop from "../components/home/hero-shop/HeroShop";
import HeroFeature from "../components/home/hero-feature/HeroFeature";
import HeroCreatePost from "../components/home/hero-create-post/HeroCreatePost";
import HeroJoinChallanges from "../components/home/hero-join-challanges/HeroJoinChallanges";
import HeroExercise from "../components/home/hero-exercises/HeroExercises";
import Testimonials from "../components/home/testimonials/Testimonials";
import TestimonialsCaller from "../components/home/testimonials-caller/TestimonialsCaller";
import HeroCollections from "../components/home/hero-collections/HeroCollections";
import TestimonialsForm from "../components/home/testimonials-form/TestimonailsForm";
import RecentlyPost from "../components/home/recently-posts/RecentlyPost";

export default function Home() {
  const { email } = useUserContext();
  const { showCart, showOrderModal } = useCart();
  const [showTestimonials, setShowTestimonials] = useState(false);

  const hideTestimonialForm = () => {
    setShowTestimonials(false);
  };
  return (
    <>
      <HeroBeginOverlay />
      {showOrderModal && <SuccesfullOrderModal />}
      {showCart && <ShopCart />}
      <PromoSection />
      <HeroCollections />
      <HeroShop />
      {email ? <HeroCreatePost /> : <HeroFeature />}
      <RecentlyPost />
      <HeroExercise />
      <HeroJoinChallanges />
      {showTestimonials && (
        <TestimonialsForm hideTestimonialForm={hideTestimonialForm} />
      )}
      {email && (
        <TestimonialsCaller
          showTestimonials={showTestimonials}
          setShowTestimonials={setShowTestimonials}
        />
      )}

      <Testimonials />

      <StatsSection />
    </>
  );
}
