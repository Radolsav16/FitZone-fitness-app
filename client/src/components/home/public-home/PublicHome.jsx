import HeroFeature from "../hero-feature/HeroFeature"
import HeroProgramm from "../hero-shop/HeroShop"
import HeroExercise from "../hero-exercises/HeroExercises"
import PromoSection from "../promo-section/PromoSection"
import HeroCollections from "../hero-collections/HeroCollections"
export default function PublicHome(){
    return(
        <>
         
            <HeroFeature />
            <PromoSection />
            <HeroCollections />
            <HeroProgramm />
            <HeroExercise />
     
        </>
    )
}