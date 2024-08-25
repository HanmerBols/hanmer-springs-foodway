"use client";

import { useMobileDetection } from "./lib/hooks/useMobileDetection";
import Banner from "./ui/Banner";
import BottomBar from "./ui/BottomBar";
import TopBar from "./ui/TopBar";

const LandingPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Banner />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default LandingPage;
