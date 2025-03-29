import { useMostBuyingProducts } from "../../../api/productApi";
import HeroShopCard from "./hero-shop-card/HeroShopCard";

export default function HeroShop(){
  const {products} = useMostBuyingProducts()
    return(
        <>
<section className="bg-white text-black py-16 px-6">
  {/* Featured Programs Section */}
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-orange-500">Best Sellers</h2>
  </div>

  

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map(p => 
       <HeroShopCard key={p._id} product = {p} />
    )}

  
  
  </div>
</section>

        </>
    )
}