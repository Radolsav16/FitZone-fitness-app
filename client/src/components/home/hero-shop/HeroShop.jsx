import { useMostBuyingProducts } from "../../../api/productApi";
import { useAddToCart, useShop } from "../../../api/shopApi";
import { useUserContext } from "../../../contexts/UserContext";
import ShopPreview from "../../shop/shop-preview/ShopPreview";
import HeroShopCard from "./hero-shop-card/HeroShopCard";
import { updateCart } from "../../../utils/updateCart";
import { useNavigate } from "react-router-dom";

export default function HeroShop(){
  const {products} = useMostBuyingProducts()
  const navigate = useNavigate()
  const {id,userLoginHandler} = useUserContext()
  const {setProductId , setShowPreview ,showPreview , productId,cancel} = useShop()
  const {addToCart} = useAddToCart()
  
  const addToCartHanlder = (data) =>{
      if(!id){
        return navigate('/fitzone/login')
      }
      addToCart(id,data);
      const updatedData = updateCart(data);
      userLoginHandler(updatedData)
  }
    return(
        <>
<section className="bg-white text-black py-16 px-6">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-orange-500">Best Sellers</h2>
  </div>

      {showPreview && <ShopPreview productId={productId} cancel={cancel}  addToCart={addToCartHanlder} />}
  

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map(p => 
       <HeroShopCard key={p._id} product = {p} setProductId = {setProductId} setShowPreview = {setShowPreview}  />
    )}

  
  
  </div>
</section>

        </>
    )
}