import HeroBeginOverlay from "../hero-begin-overlay/HeroBeginOverlay";
import HeroCreatePost from "../hero-create-post/HeroCreatePost";
import HeroJoinChallanges from "../hero-join-challanges/HeroJoinChallanges";
import HeroProgramm from "../hero-shop/HeroShop";
import RecentlyPost from "../recently-posts/RecentlyPost";

export default function PrivateHome(){
    return(
        <>
        <RecentlyPost />
        <HeroCreatePost />
        <HeroJoinChallanges />
        <HeroProgramm />
        </>
    )
}