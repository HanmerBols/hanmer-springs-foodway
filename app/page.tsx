"use client";

import { useMobileDetection } from "./lib/hooks/useMobileDetection";
import Banner from "./ui/Banner";
import BottomBar from "./ui/BottomBar";
import Footer from "./ui/Footer";
import TopBar from "./ui/TopBar";

const LandingPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Banner />
      <div>
        TODO
      </div>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default LandingPage;
