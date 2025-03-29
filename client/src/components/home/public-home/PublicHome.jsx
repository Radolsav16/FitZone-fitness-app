import HeroFeature from "../hero-feature/HeroFeature"
import HeroExercise from "../hero-exercises/HeroExercises"
import PromoSection from "../promo-section/PromoSection"
import HeroCollections from "../hero-collections/HeroCollections"
import HeroShop from "../hero-shop/HeroShop"
import Testimonials from "../testimonials/Testimonials"
export default function PublicHome(){
    return(
        <>
         
            {/* <HeroFeature /> */}
            <PromoSection />
            <HeroCollections />
            <HeroShop/>
            <HeroFeature />
            <HeroExercise />
            <Testimonials />
     
        </>
    )
}