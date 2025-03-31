
import { useState } from "react";
import HeroBeginOverlay from "../components/home/hero-begin-overlay/HeroBeginOverlay";


import PrivateHome from "../components/home/private-home/PrivateHome";
import PublicHome from "../components/home/public-home/PublicHome";
import StatsSection from "../components/home/stats-section/StatsSection";
import ShopCart from "../components/shop/shop-cart/ShopCart";
import SuccesfullOrderModal from "../components/shop/succesfull-order-modal/SuccesfullOrderModal";
import { useUserContext } from "../contexts/UserContext";
import { useCart } from "../providers/CartProvider";

export default function Home() {
  const { email } = useUserContext();
  const {showCart,showOrderModal} = useCart()
  return (
    <>
      <HeroBeginOverlay />
      {showOrderModal && <SuccesfullOrderModal/>}
      {showCart && <ShopCart />}
      {email ? <PrivateHome /> : <PublicHome />}
      

      <StatsSection />
    </>
  );
}
