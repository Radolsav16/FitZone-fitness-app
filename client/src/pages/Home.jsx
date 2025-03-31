
import HeroBeginOverlay from "../components/home/hero-begin-overlay/HeroBeginOverlay";


import PrivateHome from "../components/home/private-home/PrivateHome";
import PublicHome from "../components/home/public-home/PublicHome";
import StatsSection from "../components/home/stats-section/StatsSection";
import ShopCart from "../components/shop/shop-cart/ShopCart";
import { useUserContext } from "../contexts/UserContext";
import { useCart } from "../providers/CartProvider";

export default function Home() {
  const { email } = useUserContext();
  const {showCart} = useCart()
  return (
    <>
      <HeroBeginOverlay />
      {showCart && <ShopCart />}
      {email ? <PrivateHome /> : <PublicHome />}

      <StatsSection />
    </>
  );
}
