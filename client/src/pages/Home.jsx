
import HeroBeginOverlay from "../components/home/hero-begin-overlay/HeroBeginOverlay";


import PrivateHome from "../components/home/private-home/PrivateHome";
import PublicHome from "../components/home/public-home/PublicHome";
import StatsSection from "../components/home/stats-section/StatsSection";
import { useUserContext } from "../contexts/UserContext";

export default function Home() {
  const { email } = useUserContext();
  return (
    <>
      <HeroBeginOverlay />

      {email ? <PrivateHome /> : <PublicHome />}

      <StatsSection />
    </>
  );
}
